import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CountryComponent } from './country.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon'

import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: CountryComponent }]),
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule    
  ],
  declarations: [
    CountryComponent
  ],
  providers: [

  ]
})
export class CountryModule { }
