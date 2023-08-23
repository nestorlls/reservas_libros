import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private readonly URL = environment.API_URL;
  private _refresheReservation = new Subject<any>();
  get RefreshRequired$(): Observable<any> {
    return this._refresheReservation.asObservable();
  }

  constructor(private httpClient: HttpClient) {}

  getAllReservations$(
    pageSize: number = 100,
    page: number = 1
  ): Observable<any> {
    return this.httpClient
      .get(`${this.URL}/reservation?pageSize=${pageSize}&page=${page}`)
      .pipe(
        map((data: any) => data),
        catchError((err) => {
          console.log('Something went wrong', err);
          return of([]);
        })
      );
  }

  getReservationById$(id: string | null): Observable<any> {
    return this.httpClient.get(`${this.URL}/reservation/${id}`).pipe(
      map((data: any) => data),
      catchError((err) => {
        console.log('Something went wrong', err);
        return of({});
      })
    );
  }

  createReservation$(
    user: string,
    book: string,
    date_reserved: string,
    date_due: string
  ): Observable<any> {
    const body = {
      user,
      book,
      date_reserved,
      date_due,
    };

    return this.httpClient.post(`${this.URL}/reservation`, body).pipe(
      tap((res: any) => {
        this._refresheReservation.next(res);
      })
    );
  }

  updateReservation$(
    user: string,
    book: string,
    date_reserved: string,
    date_due: string,
    id: string | null
  ): Observable<any> {
    const body = {
      user,
      book,
      date_reserved,
      date_due,
    };

    return this.httpClient.put(`${this.URL}/reservation/${id}`, body).pipe(
      tap((res: any) => {
        this._refresheReservation.next(res);
      })
    );
  }

  deleteReservation$(id: string | null): Observable<any> {
    return this.httpClient.delete(`${this.URL}/reservation/${id}`).pipe(
      tap((res: any) => {
        this._refresheReservation.next(res);
      })
    );
  }
}
