import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { environment } from 'src/environments/environment';

const url = `${environment.url}/users/`;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  updatePhoto(img: any, id: string) {
    console.log(img, id);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT'
    });

    const requestOptions = { headers: headers, img: img };

    return this._http.put<Users>(`${url}upload/${id}`, requestOptions);
  }


  updateUser(user: Users): Observable<Users> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT'
    });

    const requestOptions = { headers: headers, user: user };

    return this._http.put<Users>(url+user._id, requestOptions);
  }

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
