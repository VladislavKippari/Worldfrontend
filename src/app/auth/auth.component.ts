import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';

import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authType: String = '';
  title: String = '';

  isSubmitting = false;
  authForm: FormGroup;
  user: User;
  hide: boolean;
  ob: Observable<boolean>;
  userlog: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,

  ) {

    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]

    });
    this.hide = true;
  }

  ngOnInit() {

    this.route.parent.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('email', new FormControl());
      }
    });
  }

  submitForm() {   //по нажатию кнопи в зависимости от логин или регистрация передаёт данные в метод из services/user.service.ts

    if (this.authType === 'register') {

      this.user = {} as User;
      this.isSubmitting = true;

      const credentials = this.authForm;

      this.user.name = credentials.controls['username'].value;
      this.user.email = credentials.controls['email'].value;
      this.user.password = credentials.controls['password'].value;
      this.user.roleId = 1;
      this.userService
        .signup(this.user, this.authForm);
       
    } else {
      this.userlog = {} as User;
      this.isSubmitting = true;

      const credentials = this.authForm;

      this.userlog.name = credentials.controls['username'].value;
      this.userlog.password = credentials.controls['password'].value;

      this.userService
        .signin(this.userlog);
      

    }

  }
}
