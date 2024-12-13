import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICalender } from '../models/ICalender';
import { IMeetings } from '../models/IMeetings';
import { IMeetUsers } from '../models/IMeetUser';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  constructor(private http: HttpClient) {}

  getMeetingsByDate(date: string) {
    return this.http.get<ICalender[]>(
      `http://localhost:2000/api/calendar?date=${date}`
    );
  }

  getMeetingsByPeriod(period: string) {
    return this.http.get<IMeetings[]>(
      `http://localhost:2000/api/meetings?period=${period}&search=`
    );
  }
  getMeetingsByPeriodAndSearch(period: string, search: string) {
    return this.http.get<IMeetings[]>(
      `http://localhost:2000/api/meetings?period=${period}&search=${search}`
    );
  }

  kickOff(m: string) {
    console.log(m);
    return this.http.patch(
      `http://localhost:2000/api/meetings/${m}?action=remove_attendee`,
      m
    );
  }

  getAllUsers() {
    return this.http.get<IMeetUsers[]>(`http://localhost:2000/api/users`);
  }

  addUser(userId: string, meetingId: string) {
    console.log('userid', userId);
    console.log('meetingid', meetingId);
    return this.http.patch(
      `http://localhost:2000/api/meetings/${meetingId}?action=add_attendee&userId=${userId}`,
      userId
    );
  }

  addMeeting(form: Omit<IMeetings, '_id'>) {
    return this.http.post<IMeetings>(
      `http://localhost:2000/api/meetings`,
      form,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
