import { Inject, Injectable, InjectionToken } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { timeout } from 'rxjs/operators';


@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  public cookieValue : string = '';
  constructor(
    private activatedRoute        : ActivatedRoute,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let params = new HttpParams(); 
    


    let token = localStorage.getItem('token')  
    let httpHeaders = new HttpHeaders({"Authorization" : String(token)}) 

    const timeoutValue = 1200000;
    params = params.append('token',String(token));
    params = params.append('urlLocal',this.activatedRoute.snapshot['_routerState'].url);
    const reqClone  = request.clone({headers: request.headers.set("Authorization", String(token))})


    return next.handle(reqClone).pipe(timeout(timeoutValue));
  }
} 