import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './country/country.service';
import { UserService } from './services/user.service';
import { NoAuthGuard } from './auth/no-auth-guard.service';
import { MatSelectModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JwtService } from './services/jwt.service';
import { RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { SharedModule } from './services/authed.module';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth.component';
import { ShowAuthedDirective } from './services/show-authed.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './services/interceptor';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { CustomSnackbarService } from './services/custom-snackbar.service';
import { NewUserComponent } from './new-user/new-user.component';
import { MatSnackBarModule } from "@angular/material";
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [

    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }, CountryService, UserService, JwtService, NoAuthGuard, CustomSnackbarService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }