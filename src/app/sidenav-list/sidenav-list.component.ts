import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  @Output() close = new EventEmitter();
  constructor(private service: UserService) { 
  }
 
  ngOnInit() {
   
    
  }
  readLocalStorageValue(item)
  {
    
    let value =   localStorage.getItem(item);
    if(value == undefined)
      {
        value =='';
      }
     return value;
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
    
  }
 
  logout() {
    this.service.signout();
    
  }
}