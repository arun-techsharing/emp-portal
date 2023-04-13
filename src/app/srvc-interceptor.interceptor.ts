import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class SrvcInterceptorInterceptor implements HttpInterceptor {

  constructor(private toastSrv:ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    console.log(request)
    const hdrs = new HttpHeaders().
      set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
    request = request.clone({ headers: hdrs });
   // request = request.clone({ headers: request.headers.set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c") });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        console.log('This is server side error');
        errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        console.log(errorMsg);
        //window.alert(errorMsg)
        if (error.status == 401) {
         // window.alert('you are not an authrorized user, please login with right crendetitals');

          this.toastSrv.error('you are not an authrorized user, please login with right crendetitals')
        }
        else if (error.status == 404) {
          //window.alert('resource which you are trying to access is not available')
          this.toastSrv.error('Api Response','resource which you are trying to access is not available',{
            timeOut:1000
          })
        }
        else if (error.status == 500) {
          window.alert('Server not available');
        }

        return throwError(errorMsg);
      }
      ));
  }
}
