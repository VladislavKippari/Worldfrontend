import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  role: String = '';
  temp:string;
  constructor(
    private userService: UserService,
    private router: Router,
  ) {this.temp=window.localStorage['roleid']||"false"
    if(!this.temp.includes("false")){
      this.role=JSON.parse(JSON.stringify(window.localStorage['roleid']))
    }
    
    }

  currentUser: User;

  ngOnInit() {

    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
        if (typeof this.userService.getCurrentUser().roleId !== 'undefined') {
         this.role=JSON.parse(JSON.stringify(window.localStorage['roleid']));

        }

      }
    );
   


  }
  logout() {
    this.userService.signout();
    
  }

}
