import { inject, Injectable } from '@angular/core';
import {

    HttpErrorResponse,
    HttpInterceptorFn,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    const _snackBar = inject(MatSnackBar);

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            console.log('❌ Status:', error.status);
            _snackBar.open(`خطا: ${error.message}`)
            return throwError(() => error);
        })
    );
};
