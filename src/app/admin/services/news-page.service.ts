import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {IEvent} from '../models/news-page.model';

@Injectable({
  providedIn: 'root'
})


export class NewsPageService {
  private API_URL = 'https://boxing-wizards-jump.herokuapp.com/news';

  httpOptions = {
    mode: 'no-cors',
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.API_URL, this.httpOptions).pipe(
      tap((data: IEvent[]) => console.log('Events: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getEvent(id: string): Observable<IEvent> {
    return this.http.get<IEvent>(`this.API_URL/${id}`, this.httpOptions).pipe(
      tap((data: IEvent) => console.log('Event: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addEvent(event: IEvent) {
    return this.http.post<IEvent>(this.API_URL, JSON.stringify(event), this.httpOptions).pipe(
      tap(addEvent => console.log('Add event: ' + JSON.stringify(addEvent))),
      catchError(this.handleError));
  }

  updateEvent(event: IEvent) {
    return this.http.put<void>(`${this.API_URL}/${event.id}`, JSON.stringify(event), this.httpOptions).pipe(
      tap(updateEvent => console.log('Update event: ' + JSON.stringify(updateEvent))),
      catchError(this.handleError));
  }

  deleteEvent(event: IEvent) {
    return this.http.delete<void>(`${this.API_URL}/${event.id}`, this.httpOptions).pipe(
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

}
