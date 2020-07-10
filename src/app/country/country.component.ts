import { Component, OnInit, ViewChild, Inject, ChangeDetectorRef } from '@angular/core';
import { CountryService } from './country.service';
import { Country } from 'src/app/country/country.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../user.model';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})

export class CountryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'code', 'continent', 'surfacearea', 'population', 'capital','deletebtn'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  arruy:Country;
  index:number;
  country: Country[] = [];
  error: any;
  dataSource : MatTableDataSource<Country>;
  constructor(private service: CountryService,public dialog: MatDialog,private changeDetectorRefs: ChangeDetectorRef) { 

  }
  ngOnInit() {
    if (window.localStorage['roleid']!=2) {
      this.displayedColumns= ['name', 'code', 'continent', 'surfacearea', 'population', 'capital'];

    }
    this.service.getCountryList().subscribe(
      country => { this.country = country['country']; console.log("data" + country);
      this.dataSource = new MatTableDataSource(this.country);
     this.tabledatasourceSettings();
      },
      error => { this.error = error.message; console.log("err" + error);  });
  
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  updateRowData(row_obj){
    
   
    this.service.updateCity(row_obj,row_obj.capital).subscribe(
      
      error => { this.error = error.message; console.log("err" + error.message);  });
      this.service.updateCountry(row_obj,row_obj.code).subscribe(
        error => { this.error = error.message; console.log("err" + error.message);  });
       
        
        
        this.arruy=this.dataSource.data.find(x => x.code == row_obj.code)
     
      
      
      
      this.index=this.dataSource.data.indexOf(this.arruy)
      this.dataSource.data[this.index]=row_obj;
      this.dataSource = new MatTableDataSource(this.dataSource.data);
      this.tabledatasourceSettings()
        }
        tabledatasourceSettings(){
          this.dataSource.filterPredicate = (data: any, filter) => { //https://stackoverflow.com/questions/49833315/angular-material-2-datasource-filter-with-nested-object
            const dataStr =JSON.stringify(data).toLowerCase();
            return dataStr.indexOf(filter) != -1; 
          }
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
  openDialog(dataForModal: Country) {
     
    const dialogRef = this.dialog.open(DialogContent,{
      data: dataForModal          
      
      
  });
    
  dialogRef.afterClosed().subscribe(result => {
    
     if(result.event == 'Update'){
      
      this.updateRowData(result.data);
      
    }
  });
 
}

}





@Component({
  selector: 'app-country',
  templateUrl: 'dialogwindow.html',
  styleUrls: ['./country.component.scss']

})
export class DialogContent {
  local_data:Country;
constructor(
    public dialogRef: MatDialogRef<DialogContent>,
    //@Optional() is used to prevent error if no data is passed
   @Inject(MAT_DIALOG_DATA) public data: Country) {
    console.log(data.name);
    this.local_data = {...data};
   
  }
  doAction(){
    this.dialogRef.close({event:'Update',data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }




}

