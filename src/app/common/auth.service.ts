import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post<any>(
      `http://localhost:2000/api/auth/login`,
      credentials,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
