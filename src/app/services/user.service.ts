import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { JwtService } from './jwt.service';
import { NewUserComponent } from '../new-user/new-user.component';
import { CustomSnackbarService } from './custom-snackbar.service';
import { User } from '../user.model';

import { map, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  url = 'http://localhost:5500';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  /*/api/content/user*/
  constructor(
    private snack: CustomSnackbarService,
    private http: HttpClient,
    private jwtService: JwtService,
    private router: Router
  ) { }

  works() {
    this.isAuthenticatedSubject.next(false);
  }
  signup(newUser: User, form: FormGroup) {

    return this.http.post(this.url + '/api/auth/signup', newUser, { responseType: 'text' }).subscribe(
      data => {
        console.log('POST Request is successful ', data);


        if (data === "User added!") {
          this.snack.open(data, "Close", 6000, 'top', 'center');
          this.router.navigateByUrl('/');
        } else {
          this.snack.open(data, "Close", 6000, 'top', 'center');
        }
      },

    );
  }
  signupNew(newUser: User, form: FormGroup) {

    return this.http.post(this.url + '/api/auth/newuser', newUser, { responseType: 'text' }).subscribe(
      data => {
        console.log('POST Request is successful ', data);

        this.snack.open(data, "Close", 6000, 'top', 'center');
        if (data === "User added!") {
          form.reset();
        }
      },

    );
  }
  signin(newUser: User) {


    return this.http.post(this.url + '/api/auth/signin', newUser, { responseType: 'text' }).subscribe(
      data => {
        console.log('POST Request is successful ', data);

        if (data.includes("Wrong username!") || data.includes("Invalid Password!")) {


          this.snack.open(data, "Close", 6000, 'top', 'center');
        } else {
          this.snack.open("You are logged", "Close", 3000, 'top', 'center');
          this.isAuthenticatedSubject.next(true);
          newUser.roleId = JSON.parse(data as string).roleId;
          newUser.email = JSON.parse(data as string).email;
          newUser.id = JSON.parse(data as string).id;
          this.currentUserSubject.next(newUser);

          this.jwtService.saveToken(data);
          this.router.navigateByUrl('/');
          console.log(this.currentUserSubject.value.name);
        }




      }

    );
  }
  signout() {

    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }






  setAuth(user: User) {


    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  updateUser(newUser: User, form: FormGroup) {
    console.log(newUser.id + " update");
    return this.http.put(this.url + '/api/auth/update', newUser, { responseType: 'text' }).subscribe(
      data => {

        if (data === "User updated successfully") {
          this.snack.open("User updated successfully", "Close", 2500, 'top', 'center');
          this.router.navigateByUrl('/');
        } else {
          this.snack.open(data, "Close", 6000, 'top', 'center');
        }
      },

    );
  }



  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }


}

//методы для аутентификации польщователя, которые можно вызвать в любом другом файле.