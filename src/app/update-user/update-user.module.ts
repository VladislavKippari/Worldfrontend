import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdateUserComponent } from './update-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';


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
        MatSnackBarModule,

        RouterModule.forChild([{ path: '', component: UpdateUserComponent }])

    ],
    declarations: [
        UpdateUserComponent
    ],
    providers: [

    ]
})
export class UpdateUserModule { }