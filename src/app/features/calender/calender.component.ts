import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeaturesService } from '../features.service';
import { ICalender } from '../../models/ICalender';
import { IMeetings, ITime } from '../../models/IMeetings';

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [DatePipe, FormsModule, CommonModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss',
})
export class CalenderComponent implements OnInit {
  // selectedDate!: string;
  today = Date.now();
  selectedDate = new Date(this.today);

  displayDate = new Date(this.today);

  ICalender!: ICalender[];

  dateStr!: string;

  hours: number[] = Array.from({ length: 24 }, (_, i) => i);

  constructor(private featureService: FeaturesService) {}
  ngOnInit(): void {
    this.formatDate();
    this.getMeetingsByDate();
  }

  formatDate() {
    this.dateStr =
      this.selectedDate.getFullYear() +
      '-' +
      String(this.selectedDate.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(this.selectedDate.getDate()).padStart(2, '0');
  }
  getMeetingsByDate() {
    this.featureService.getMeetingsByDateCalender(this.dateStr).subscribe({
      next: (data) => {
        console.log('i am cmng brooo');
        this.ICalender = data;
        this.updateMeetingsOnCalendar();
      },
    });
  }

  onDateChange() {
    this.selectedDate = new Date(this.selectedDate);
    this.displayDate = this.selectedDate;
    this.formatDate();
    console.log(this.dateStr);
    this.clearCalendar();
    console.log('Fetching meetings for date:', this.dateStr);
    this.getMeetingsByDate();
  }

  updateMeetingsOnCalendar() {
    this.ICalender.forEach((meeting) => {
      const startHour = parseInt(meeting.startTime.split(':')[0], 10); // Extract hour from starttime string
      const boxId = this.getBoxIdForHour(startHour);

      const boxElement = document.getElementById(boxId);

      if (boxElement) {
        const meetingContent = `
          <div class="meeting-box" style="background-color: gray; margin: 0px; max-height: 355px;
  overflow: hidden;
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;">
            <p style="margin:0px;margin: 0;
  padding: 0;
  font-size: 10px;">${meeting.name}</p>
            <div class="attendees-container" style="display: flex;
flex - direction: row;
margin - top: 5px;
padding: 0;
gap: 5px;
white - space: nowrap;">
              ${meeting.attendees
                .map(
                  (attendee) =>
                    `<p style="display: inline-block;
  font-size: 9px;
  margin-right: 10px;"><span class="attendee-email">${attendee.email}</span></p>`
                )
                .join('')}
            </div>
          </div>
        `;

        // Append the meeting content to the corresponding box
        boxElement.innerHTML += meetingContent;
      }
    });
  }

  // Helper function to map hour to box id
  getBoxIdForHour(hour: number): string {
    const boxIds = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thriteen',
      'fourteen',
      'fiveteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
      'twenty',
      'tone',
      'ttwo',
      'tthree',
    ];

    // Return the box id corresponding to the hour (10 AM => 'eleven', etc.)
    return boxIds[hour];
  }

  clearCalendar() {
    // Loop over all boxes and clear their inner HTML
    const boxIds = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thriteen',
      'fourteen',
      'fiveteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
      'twenty',
      'tone',
      'ttwo',
      'tthree',
    ];

    boxIds.forEach((boxId) => {
      const boxElement = document.getElementById(boxId);
      if (boxElement) {
        const numberElement = boxElement.querySelector('.top-left');

        const numberText = numberElement ? numberElement.textContent : '';

        boxElement.innerHTML = ''; // Clear the box content

        boxElement.innerHTML = `<p class="top-left">${numberText}</p>`;
      }
    });
  }
}
