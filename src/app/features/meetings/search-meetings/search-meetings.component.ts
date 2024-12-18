import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../../features.service';
import { IMeetings } from '../../../models/IMeetings';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IUser } from '../../../models/IUser';
import { IMeetUsers } from '../../../models/IMeetUser';

@Component({
  selector: 'app-search-meetings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-meetings.component.html',
  styleUrl: './search-meetings.component.scss',
})
export class SearchMeetingsComponent implements OnInit {
  period: string = 'present';
  meetings!: IMeetings[];
  search!: string;
  memberId = 'selectMember';
  loggedInMail = localStorage.getItem('email');

  allUsers!: IMeetUsers[];

  constructor(private featuresServie: FeaturesService) {}

  ngOnInit(): void {
    this.getMeetingsByPeriod();
    this.getMeetingsByPeriodAndSearch();
    this.getAllUsers();
  }
  /*
  getHour(time: ITime): string {

    console.log(time.hour+time.minute);
    return time.substring(0, 2);
  }

  getMinutes(time: string): string {
    return time.substring(3, 5);
  }

  */
  getAllUsers() {
    this.featuresServie.getAllUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.allUsers = data;
      },
    });
  }

  getMeetingsByPeriod() {
    this.featuresServie.getMeetingsByPeriod(this.period).subscribe({
      next: (data) => {
        this.meetings = data;
      },
    });
  }

  getMeetingsByPeriodAndSearch() {
    this.featuresServie
      .getMeetingsByPeriodAndSearch(this.period, this.search)
      .subscribe({
        next: (data) => {
          this.meetings = data;
          console.log(this.period);
          console.log(this.search);
          console.log(data);
        },
      });
  }

  onSubmitForm(form: NgForm) {
    if (this.search != null) this.getMeetingsByPeriodAndSearch();
    else {
      // this.getMeetingsByPeriod();
      this.getMeetingsByPeriod();
    }
  }

  kickOff(id: number) {
    this.featuresServie.kickOff(id).subscribe({
      next: (data) => {
        console.log('the data is ', data);
        this.getMeetingsByPeriod();
      },
    });
  }

  addUser(meetingId: number) {
    console.log('meeting id', meetingId, 'membermail', this.memberId);

    const userMail = {
      email: this.memberId,
    };

    this.featuresServie.addUser(userMail, meetingId).subscribe({
      next: (data) => {
        console.log(data);
        // this.getMeetingsByPeriod();
        this.getMeetingsByPeriodAndSearch();
      },
    });
  }
}

export interface ITime {
  hour: number;
  minute: number;
}
