import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './auth/no-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
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
        loadChildren: './country/country.module#CountryModule',
        canActivate: [AuthGuard],    //позволяет зайти на страницу только авторизированным пользователям
        data: {
            permission: {             //
                only: ['1', '2'],    //
                redirectTo: 'home'
            }                        //
        }                           //позволяет зайти на страницу только авторизированным пользователям                            
    },
    {
        path: 'newuser',
        loadChildren: './new-user/new-user.module#NewUserModule',
        canActivate: [AuthGuard],
        data: {
            permission: {
                only: ['2'],
                redirectTo: 'home'
            }
        }  
       
    },
    {
        path: 'updateuser',
        loadChildren: './update-user/update-user.module#UpdateUserModule',
        canActivate: [AuthGuard],
        data: {
            permission: {
                only: ['1', '2'],
                redirectTo: 'home'
            }
        }  
    }
    

];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
