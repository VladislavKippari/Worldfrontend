
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtService } from '../services/jwt.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const token = this.jwtService.getToken();

    if (token) {
      headersConfig['x-access-token'] = this.jwtService.getToken();
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
// код  выше получает jwt токен, который сохранился после логина и по нему определяет админ или простой юзер.
// Тоесть в backend в папке router можно задать допуск юзеру или админу и уже в frontend по введённому пути будет автоматическая проверка роли пользователя.
