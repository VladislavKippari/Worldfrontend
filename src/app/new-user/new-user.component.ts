import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  authType: String = '';
  title: String = '';
  error: String;
  isSubmitting = false;
  authForm: FormGroup;
  user: User;
  hide: boolean;
  wady: string;
  userlog: User;
  constructor(private _snackBar: MatSnackBar, private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder, ) {
    this.authForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'email': ['', Validators.required],
      'role': ['', Validators.required],
    });
    this.hide = true;

  }

  ngOnInit() {

    this.authForm.reset();
  }
  submitForm() {   //по нажатию кнопи в зависимости от логин или регистрация передаёт данные в метод из services/user.service.ts



    this.user = {} as User;
    this.isSubmitting = true;

    const credentials = this.authForm;

    this.user.name = credentials.controls['username'].value;
    this.user.email = credentials.controls['email'].value;
    this.user.password = credentials.controls['password'].value;
    if (credentials.controls['role'].value === 'Admin') {
      this.user.roleId = 2;
    } else {
      this.user.roleId = 1;
    }

    this.userService
      .signupNew(this.user, this.authForm);




  }

}
