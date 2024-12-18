import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITeams } from '../models/ITeams';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  getTeams() {
    return this.http.get<ITeams[]>(`http://localhost:2000/api/teams`);
  }
  excuseYourself(id: string) {
    return this.http.patch(
      `http://localhost:2000/api/teams/${id}?action=remove_member`,
      id
    );
  }
}
