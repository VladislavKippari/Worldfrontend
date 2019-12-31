
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  authType: String = '';
  title: String = '';
  error: String;
  isSubmitting = false;
  updateForm: FormGroup;
  password: string;
  username: string;
  email: string;
  user: User;
  hide: boolean;
  constructor(private jwt: JwtService, private _snackBar: MatSnackBar, private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder, ) {
    this.updateForm = this.fb.group({
      'username': ['', Validators.required],
     
      'email': ['', Validators.required]

    });
    this.hide = true;

  }

  ngOnInit() {
   

  
    this.updateForm.setValue({ username:JSON.parse(JSON.stringify(window.localStorage['name'])), email: JSON.parse(JSON.stringify(window.localStorage['email'])) });

  }
  submitForm() {   //по нажатию кнопи в зависимости от логин или регистрация передаёт данные в метод из services/user.service.ts



    this.user = {} as User;
    this.isSubmitting = true;

    const credentials = this.updateForm;

    this.user.name = credentials.controls['username'].value;
    this.user.email = credentials.controls['email'].value;
  
    this.user.id = this.userService.getCurrentUser().id;
    console.log(this.user.roleId + " id");
    this.userService.updateUser(this.user, this.updateForm);






  }

}
