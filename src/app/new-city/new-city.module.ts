import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCityComponent } from './new-city.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NewCityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: NewCityComponent }])
  ]

})
export class NewCityModule { }
