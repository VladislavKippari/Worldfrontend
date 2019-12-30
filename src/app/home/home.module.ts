import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }])

  ],
  declarations: [HomeComponent]
})
export class HomeComponentModule { }