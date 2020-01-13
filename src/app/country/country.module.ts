import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CountryComponent } from './country.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: CountryComponent }]),
    MatButtonModule,
    MatTableModule

  ],
  declarations: [
    CountryComponent
  ],
  providers: [

  ]
})
export class CountryModule { }
