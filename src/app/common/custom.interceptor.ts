import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const myToken = localStorage.getItem('Authorization');

  const cloneRequest = req.clone({
    setHeaders: {
      Authorization: `${myToken}`,
    },
  });

  return next(cloneRequest);
};