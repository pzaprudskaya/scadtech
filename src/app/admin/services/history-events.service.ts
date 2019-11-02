import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {IAllHistoryEvents, IHistoryEvent} from '../models/about-company-page.model';

@Injectable({
  providedIn: 'root'
})


export class HistoryEventsService {
  private API_URL = 'https://boxing-wizards-jump.herokuapp.com/history-events';

  httpOptions = {
    mode: 'no-cors',
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {
  }

  getHistoryEvents(viewPages, skipPages): Observable<IAllHistoryEvents> {
    const p = new HttpParams()
      .set('top', viewPages)
      .set('skip', skipPages);
    const httpOptions = {
      mode: 'no-cors',
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params: p,
    };
    return this.http.get<IAllHistoryEvents>(this.API_URL, httpOptions).pipe(
      tap((data: IAllHistoryEvents) => console.log('History events: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getHistoryEvent(id: string): Observable<IHistoryEvent> {
    return this.http.get<IHistoryEvent>(`${this.API_URL}/${id}`, this.httpOptions).pipe(
      tap((data: IHistoryEvent) => console.log('History event: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addHistoryEvent(event: IHistoryEvent) {
    return this.http.post<IHistoryEvent>(this.API_URL, JSON.stringify(event), this.httpOptions).pipe(
      tap(addEvent => console.log('Add event: ' + JSON.stringify(addEvent))),
      catchError(this.handleError));
  }

  updateHistoryEvent(event: IHistoryEvent) {
    return this.http.put<void>(`${this.API_URL}/${event._id}`, JSON.stringify(event), this.httpOptions).pipe(
      tap(updateEvent => console.log('Update event: ' + JSON.stringify(updateEvent))),
      catchError(this.handleError));
  }

  deleteHistoryEvent(event: IHistoryEvent) {
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

}
