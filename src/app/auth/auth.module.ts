import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  MatSelectModule} from '@angular/material';
import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    RouterModule.forChild([{ path: '', component: AuthComponent }])
    
  ],
  declarations: [
    AuthComponent
  ],
  providers: [
    NoAuthGuard
  ]
})
export class AuthModule {}
