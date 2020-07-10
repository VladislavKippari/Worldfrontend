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
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { SharedModule } from './services/authed.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './services/interceptor';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { CustomSnackbarService } from './services/custom-snackbar.service';
import { MatSnackBarModule } from "@angular/material";
import { AuthGuard } from './services/auth-guard.service';
import { UpdateCityComponent } from './update-city/update-city.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContent} from './country/country.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, UpdateCityComponent, SidenavListComponent,DialogContent],
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
    MatSelectModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  entryComponents: [ DialogContent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }, CountryService, UserService, JwtService, NoAuthGuard, CustomSnackbarService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }