import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {IAbout} from '../models/about-company-page.model';

@Injectable({
  providedIn: 'root'
})


export class AboutService {
  private API_URL = 'https://boxing-wizards-jump.herokuapp.com/customization/about';

  httpOptions = {
    mode: 'no-cors',
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}

  getAbout(): Observable<IAbout> {
    return this.http.get<IAbout>(`${this.API_URL}`, this.httpOptions).pipe(
      tap((data: IAbout) => console.log('About: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateAbout(value: IAbout) {
    return this.http.post<IAbout>(`${this.API_URL}`, JSON.stringify(value), this.httpOptions).pipe(
      tap(updateValue => console.log('Update about: ' + JSON.stringify(updateValue))),
      catchError(this.handleError));
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
