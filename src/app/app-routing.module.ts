import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './auth/no-auth-guard.service';
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },



    {
        path: 'home',
        loadChildren: './home/home.module#HomeComponentModule'
    },

    {
        path: 'login',
        loadChildren: './auth/auth.module#AuthModule',
        canActivate: [NoAuthGuard]
    },
    {
        path: 'register',
        loadChildren: './auth/auth.module#AuthModule',
        canActivate: [NoAuthGuard]
    },
    {
        path: 'country',
        loadChildren: './country/country.module#CountryModule'
    },
    {
        path: 'newuser',
        loadChildren: './new-user/new-user.module#NewUserModule'
    },
    {
        path: 'updateuser',
        loadChildren: './update-user/update-user.module#UpdateUserModule'
    }

];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
