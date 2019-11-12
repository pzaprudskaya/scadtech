import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {IEvent} from '../models/news-page.model';
import {IAllLeaderships, ILeadership} from "../models/leaderships-page.model";

@Injectable({
  providedIn: 'root'
})


export class LeadershipsPageService {
  private API_URL = 'https://boxing-wizards-jump.herokuapp.com/leaderships';

  httpOptions = {
    mode: 'no-cors',
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getLeaderships(viewPages, skipPages): Observable<IAllLeaderships> {
    const p = new HttpParams()
      .set('top', viewPages)
      .set('skip', skipPages);
    const httpOptions = {
      mode: 'no-cors',
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params: p,
    };
    return this.http.get<IAllLeaderships>(this.API_URL, httpOptions).pipe(
      tap((data: IAllLeaderships) => console.log('Leaderships: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getLeadership(id: string): Observable<ILeadership> {
    return this.http.get<ILeadership>(`${this.API_URL}/${id}`, this.httpOptions).pipe(
      tap((data: ILeadership) => console.log('Leadership: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addLeadership(event: ILeadership) {
    return this.http.post<ILeadership>(this.API_URL, JSON.stringify(event), this.httpOptions).pipe(
      tap(addLeadership => console.log('Add leadership: ' + JSON.stringify(addLeadership))),
      catchError(this.handleError));
  }

  updateLeadership(event: ILeadership) {
    return this.http.put<void>(`${this.API_URL}/${event._id}`, JSON.stringify(event), this.httpOptions).pipe(
      tap(updateLeadership => console.log('Update leadership: ' + JSON.stringify(updateLeadership))),
      catchError(this.handleError));
  }

  deleteLeadership(event: ILeadership) {
    return this.http.delete<void>(`${this.API_URL}/${event._id}`, this.httpOptions).pipe(
      tap(deleteLeadership => console.log('Delete leadership: ' + JSON.stringify(deleteLeadership))),
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
