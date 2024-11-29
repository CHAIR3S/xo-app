import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const xoInterceptor: HttpInterceptorFn = (req, next) => {

  const reqWithHeader = req.clone({
    headers: req.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoieG8iLCJuYW1lIjoieG8tYWRtaW4iLCJ2ZXJpZnkiOnRydWUsImlhdCI6MTczMjY4Mzg1NSwiZXhwIjoxNzMyNzgzODU1fQ.V6RiZgQU92Y3IrVpOzPl7PshNsRlsljCHEU78xUFCzE'),
  });

  return next(reqWithHeader);
};
