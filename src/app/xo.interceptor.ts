import { HttpInterceptorFn } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from './service/auth.service';


export const xoInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);

  const token = authService.getToken();

  const reqWithHeader = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + token),
  });

  console.log(token);

  return next(reqWithHeader);
};
