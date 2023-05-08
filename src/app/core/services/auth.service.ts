import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const url = `${environment.url}/users/`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _http: HttpClient) { }

  addUser(user: Users): Observable<Users> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST'
    });

    const requestOptions = { headers: headers, user: user };

    return this._http.post<Users>(url, requestOptions);
  }
}
