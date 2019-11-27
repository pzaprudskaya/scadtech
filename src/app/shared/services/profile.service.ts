import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IProfile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private API_URL = '/api/profile';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getData(): Observable<IProfile> {
    return this.http.get<IProfile>(this.API_URL, this.httpOptions).pipe(
      tap((data: IProfile) => console.log('Products: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateData(product: IProfile) {
    return this.http
      .put<void>(
        `${this.API_URL}/${product._id}`,
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(
        tap(updateProduct =>
          console.log('Update product: ' + JSON.stringify(updateProduct))
        ),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
