import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './models/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  addUser(newList: IUser) {
    return this.http.post('http://localhost:2000/api/auth/register', newList, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  loginUser(oldUser: Omit<IUser, 'name'>) {
    return this.http.post('http://localhost:2000/api/auth/login', oldUser, {
      headers: { 'content-Type': 'application/json' },
    });
  }
}