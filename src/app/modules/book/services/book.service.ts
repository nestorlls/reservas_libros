import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly URL = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  getAllBooks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/book`).pipe(
      map((data: any) => data),
      catchError((err) => {
        console.log('Something went wrong', err);
        return of([]);
      })
    );
  }

  getBookById$(id: string | null): Observable<any> {
    return this.httpClient.get(`${this.URL}/book/${id}`).pipe(
      map((data: any) => data),
      catchError((err) => {
        console.log('Something went wrong', err);
        return of({});
      })
    );
  }

  createBook$(
    title: string,
    author: string,
    description: string
  ): Observable<any> {
    const body = {
      title,
      author,
      description,
    };

    return this.httpClient.post(`${this.URL}/book`, body).pipe(
      tap((res: any) => {
        return res;
      })
    );
  }

  updateBook$(
    title: string,
    author: string,
    description: string,
    id: string | null
  ): Observable<any> {
    const body = {
      title,
      author,
      description,
    };
    return this.httpClient.put(`${this.URL}/book/${id}`, body).pipe(
      tap((res: any) => {
        console.log(res);
      })
    );
  }

  deleteBook$(id: string | null): Observable<any> {
    return this.httpClient.delete(`${this.URL}/book/${id}`).pipe(
      tap((res: any) => {
        console.log(res);
      })
    );
  }
}
