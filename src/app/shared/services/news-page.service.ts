import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {IAllEvents, IEvent} from '../models/news-page.model';

@Injectable({
  providedIn: 'root'
})


export class NewsPageService {
  private API_URL = 'api/news';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getEvents(viewPages, skipPages): Observable<IAllEvents> {
    const p = new HttpParams()
      .set('top', viewPages)
      .set('skip', skipPages);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params: p,
    };
    return this.http.get<IAllEvents>(this.API_URL, httpOptions).pipe(
      tap((data: IAllEvents) => console.log('Events: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getEvent(id: string): Observable<IEvent> {
    return this.http.get<IEvent>(`${this.API_URL}/${id}`, this.httpOptions).pipe(
      tap((data: IEvent) => console.log('Event: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addEvent(event: IEvent) {
    return this.http.post<IEvent>(this.API_URL, JSON.stringify(event), this.httpOptions).pipe(
      tap(addEvent => console.log('Add event: ' + JSON.stringify(addEvent))),
      catchError(this.handleError));
  }

  updateEvent(id: string, event: IEvent) {
    return this.http.put<void>(`${this.API_URL}/${id}`, JSON.stringify(event), this.httpOptions).pipe(
      tap(updateEvent => console.log('Update event: ' + JSON.stringify(updateEvent))),
      catchError(this.handleError));
  }

  deleteEvent(event: IEvent) {
    return this.http.delete<void>(`${this.API_URL}/${event._id}`, this.httpOptions).pipe(
      tap(deleteEvent => console.log('Delete event: ' + JSON.stringify(deleteEvent))),
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
  addImage(id: string, formData) {
    return this.http.post<IEvent>(`${this.API_URL}/${id}/image`, formData).pipe(
      tap(addImage => console.log('Add Image: ' + JSON.stringify(addImage))),
      catchError(this.handleError));
  }
}
