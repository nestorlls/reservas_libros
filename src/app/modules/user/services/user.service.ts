import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly URL = environment.API_URL;
  private _refreshRequired$ = new Subject<any>();
  get RefreshRequired$(): Observable<any> {
    return this._refreshRequired$.asObservable();
  }

  constructor(private httpClient: HttpClient) {}

  getAllUsers$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/user`).pipe(
      map((data: any) => data),
      catchError((err) => {
        console.log('Something went wrong', err);
        return of([]);
      })
    );
  }

  getUserById$(id: string | null): Observable<any> {
    return this.httpClient.get(`${this.URL}/user/${id}`).pipe(
      map((data: any) => data),
      catchError((err) => {
        console.log('Something went wrong', err);
        return of({});
      })
    );
  }

  createUser$(username: string, email: string): Observable<any> {
    const body = {
      username,
      email,
    };

    return this.httpClient.post(`${this.URL}/auth/signup`, body).pipe(
      tap((res: any) => {
        this._refreshRequired$.next(res);
      })
    );
  }

  updateUser$(
    username: string,
    email: string,
    id: string | null
  ): Observable<any> {
    const body = {
      username,
      email,
    };
    return this.httpClient.put(`${this.URL}/user/${id}`, body).pipe(
      tap((res: any) => {
        this._refreshRequired$.next(res);
      })
    );
  }

  deleteUser$(id: string | null): Observable<any> {
    return this.httpClient.delete(`${this.URL}/user/${id}`).pipe(
      tap((res: any) => {
        this._refreshRequired$.next(res);
      })
    );
  }
}
