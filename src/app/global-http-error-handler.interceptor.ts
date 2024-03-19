import { HttpInterceptorFn } from '@angular/common/http';

export const globalHttpErrorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('request on its way', req.url);
  return next(req);
};
