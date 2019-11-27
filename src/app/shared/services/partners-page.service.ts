import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IAllPartners, IPartners } from '../models/partners-page.model';

@Injectable({
  providedIn: 'root'
})
export class PartnersPageService {
  private API_URL = '/api/partners';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getPartners(viewPages, skipPages): Observable<IAllPartners> {
    const p = new HttpParams().set('top', viewPages).set('skip', skipPages);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: p
    };
    return this.http.get<IAllPartners>(this.API_URL, httpOptions).pipe(
      tap((data: IAllPartners) =>
        console.log('Partners: ' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    );
  }

  getPartner(id: string): Observable<IPartners> {
    return this.http
      .get<IPartners>(`${this.API_URL}/${id}`, this.httpOptions)
      .pipe(
        tap((data: IPartners) =>
          console.log('Partner: ' + JSON.stringify(data))
        ),
        catchError(this.handleError)
      );
  }

  addPartner(partner: IPartners) {
    return this.http
      .post<IPartners>(this.API_URL, JSON.stringify(partner), this.httpOptions)
      .pipe(
        tap(addPartner =>
          console.log('Add partner: ' + JSON.stringify(addPartner))
        ),
        catchError(this.handleError)
      );
  }

  updatePartner(id: string, partner: IPartners) {
    return this.http
      .put<void>(
        `${this.API_URL}/${id}`,
        JSON.stringify(partner),
        this.httpOptions
      )
      .pipe(
        tap(updatePartner =>
          console.log('Update partner: ' + JSON.stringify(updatePartner))
        ),
        catchError(this.handleError)
      );
  }

  deletePartner(partner: IPartners) {
    return this.http
      .delete<void>(`${this.API_URL}/${partner._id}`, this.httpOptions)
      .pipe(
        tap(deletePartner =>
          console.log('Delete partner: ' + JSON.stringify(deletePartner))
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
  addImage(id: string, formData) {
    return this.http
      .post<IPartners>(`${this.API_URL}/${id}/image`, formData)
      .pipe(
        tap(addImage => console.log('Add Image: ' + JSON.stringify(addImage))),
        catchError(this.handleError)
      );
  }
  addFile(id: string, formData) {
    return this.http
      .post<IPartners>(`${this.API_URL}/${id}/file`, formData)
      .pipe(
        tap(addFile => console.log('Add file: ' + JSON.stringify(addFile))),
        catchError(this.handleError)
      );
  }
}
