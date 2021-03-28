import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const apiUrl = 'https://www.googleapis.com/books/v1/volumes';

@Injectable({
    providedIn: 'root'
})
export class BookService {
  
    constructor(private http: HttpClient) { }

    getBooks(): Observable<any[]> {
        return this.http.get<any[]>(apiUrl + '?q=kaplan%20test%20prep')
          .pipe(
            tap(_ => this.log('fetched Categories')),
            catchError(this.handleError('getCategories', []))
          );
    }

    postBook(data: any): Observable<any> {
        return this.http.post<any>(apiUrl, data).pipe(
          tap((prod: any) => console.log(`Data Post`)),
          catchError(this.handleError<any>('postBook'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          console.error(error); // log to console instead
          this.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
    }

    private log(message: string) {
        console.log(message);
    }

}