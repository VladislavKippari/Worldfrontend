import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from './user.service';
import { take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
var temp=window.localStorage['roleid'] as string||"0";
if(!temp.includes("0")){
temp=JSON.parse(JSON.stringify(window.localStorage['roleid']));

}else{
  temp="0";
}
    const userRole: string = temp;
        const permission = route.data["permission"];
        
        let canActivate: boolean;

        if (!permission) throw new Error('Permissions is not setup!');
        if (!permission.only.length) throw new Error('Roles are not setup!');

        canActivate = permission.only.includes(userRole);

        if (!canActivate) this.router.navigate([permission.redirectTo]);

        return canActivate;

  }
}
//блокирует неавторизированному пользователю доступ к страницам. Смотри app-routing.module.ts.