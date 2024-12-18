import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post<any>(
      `https://localhost:7110/api/Auth/Login`,
      credentials,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
