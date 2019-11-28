import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IAllDocuments, IDocument } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private API_URL = '/api/documentation';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getDocuments(viewPages, skipPages): Observable<IAllDocuments> {
    const p = new HttpParams().set('top', viewPages).set('skip', skipPages);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: p
    };
    return this.http.get<IAllDocuments>(this.API_URL, httpOptions).pipe(
      tap((data: IAllDocuments) =>
        console.log('Documents: ' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    );
  }

  getDocument(id: string): Observable<IDocument> {
    return this.http
      .get<IDocument>(`${this.API_URL}/${id}`, this.httpOptions)
      .pipe(
        tap((data: IDocument) =>
          console.log('Document: ' + JSON.stringify(data))
        ),
        catchError(this.handleError)
      );
  }

  addDocument(value: IDocument) {
    return this.http
      .post<IDocument>(this.API_URL, JSON.stringify(value), this.httpOptions)
      .pipe(
        tap(addDocument =>
          console.log('Add document: ' + JSON.stringify(addDocument))
        ),
        catchError(this.handleError)
      );
  }

  updateDocument(id: string, value: IDocument) {
    return this.http
      .put<void>(
        `${this.API_URL}/${id}`,
        JSON.stringify(value),
        this.httpOptions
      )
      .pipe(
        tap(updateDocument =>
          console.log('Update document: ' + JSON.stringify(updateDocument))
        ),
        catchError(this.handleError)
      );
  }

  deleteDocument(value: IDocument) {
    return this.http
      .delete<void>(`${this.API_URL}/${value._id}`, this.httpOptions)
      .pipe(
        tap(deleteDocument =>
          console.log('Delete document: ' + JSON.stringify(deleteDocument))
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
