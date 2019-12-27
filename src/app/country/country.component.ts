import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';
import { Country } from 'src/app/country/country.model';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  constructor(private service:CountryService) { }

country: Country[]=[];
error:any;


  ngOnInit() {
    this.getAllData();
  }
  getAllData(){
    return this.service.getCountryList().subscribe(
      country=> { this.country=country['country'];console.log("data"+country);},
      error=>{this.error=error.message;console.log("err"+error);});
  }
}

