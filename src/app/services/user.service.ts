import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { JwtService } from './jwt.service';
import { NewUserComponent } from '../new-user/new-user.component';
import { CustomSnackbarService } from './custom-snackbar.service';
import { User } from '../user.model';
import { Userlogin } from '../user.model';
import { map ,  distinctUntilChanged } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<Userlogin>({} as Userlogin);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  url='http://localhost:5500';
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  error:string;
  /*/api/content/user*/
  constructor (
   private snack:CustomSnackbarService,
    private http: HttpClient,
    private jwtService: JwtService
    
  ) {}

  works(){
    this.isAuthenticatedSubject.next(false);
  }
  signup(newUser:User,form:FormGroup)  {
  
    return this.http.post(this.url+'/api/auth/signup',newUser,{responseType:'text'}).subscribe(
      data => {
        console.log('POST Request is successful ', data);
        this.error=data;
        this.snack.open(data,"Close",6000,'top','center');
        if(data==="User added!"){
          form.reset();
        }
      }, 
      
    );
  }
  signin(newUser:Userlogin)  {
   
    return this.http.post(this.url+'/api/auth/signin',newUser,{responseType:'text'}).subscribe(
      data => {
        console.log('POST Request is successful ', data);
        this.isAuthenticatedSubject.next(true);
        newUser.roleId=JSON.parse(data as string).roleId;
        this.currentUserSubject.next(newUser);
        this.jwtService.saveToken(data);

        
      }
      
    );
  }
  signout()  {
   
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

 

  getCurrentUser(): Userlogin {
    return this.currentUserSubject.value;
  }



}

//методы для аутентификации польщователя, которые можно вызвать в любом другом файле.