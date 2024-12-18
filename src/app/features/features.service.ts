import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICalender } from '../models/ICalender';
import { IMeetings } from '../models/IMeetings';
import { IMeetUsers } from '../models/IMeetUser';
import { ITeams } from '../models/ITeams';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  constructor(private http: HttpClient) {}

  // getMeetingsByDate(date: string) {
  //   return this.http.get<IMeetings[]>(
  //     `http://localhost:2000/api/calendar?date=${date}`
  //   );
  // }
  getMeetingsByDateCalender(date: string): Observable<ICalender[]> {
    return this.http.get<ICalender[]>(
      `https://localhost:7110/api/Meetings/meetings?date=${date}`
    );
  }
  getMeetingsByDate(date: string) {
    return this.http.get<IMeetings[]>(
      `https://localhost:7110/api/Meetings/meetings?date=${date}`
    );
  }

  getMeetingsByPeriod(period: string) {
    console.log('period', period, 'search');
    return this.http.get<IMeetings[]>(
      `https://localhost:7110/api/Meetings/meetings/filter?period=${period}&search=`
    );
  }
  getMeetingsByPeriodAndSearch(period?: string, search?: string) {
    console.log('period', period, 'search', search);

    let url = 'https://localhost:7110/api/Meetings/meetings/filter?';

    if (period) {
      url += `period=${period}&`;
    }

    if (search) {
      url += `search=${search}`;
    }

    if (url.endsWith('&')) {
      url = url.slice(0, -1);
    }

    return this.http.get<IMeetings[]>(url);
    // return this.http.get<IMeetings[]>(
    //   `https://localhost:7110/api/Meetings/meetings/filter?period=${period}&search=${search}`
    // );
  }

  kickOff(m: number) {
    console.log(m);
    return this.http.delete(
      `https://localhost:7110/api/Meetings/meetings/${m}`,
      {
        responseType: 'text',
      }
    );
  }

  getAllUsers() {
    return this.http.get<IMeetUsers[]>(
      `https://localhost:7110/api/Meetings/users`
    );
  }

  addUser(userId: { email: string }, meetingId: number) {
    console.log('userid', userId);
    console.log('meetingid', meetingId);
    return this.http.post(
      `https://localhost:7110/api/Meetings/meetings/${meetingId}/attendees`,
      userId,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  addMeeting(form: Omit<IMeetings, 'id'>) {
    return this.http.post<IMeetings>(
      `https://localhost:7110/api/Meetings/add`,
      form,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
