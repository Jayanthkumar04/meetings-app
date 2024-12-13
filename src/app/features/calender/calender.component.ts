import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeaturesService } from '../features.service';
import { ICalender } from '../../models/ICalender';

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
    this.featureService.getMeetingsByDate(this.dateStr).subscribe({
      next: (data) => {
        this.ICalender = data;
      },
    });
  }

  onDateChange() {
    this.selectedDate = new Date(this.selectedDate);
    this.displayDate = this.selectedDate;
    this.formatDate();
    console.log(this.dateStr);
    this.getMeetingsByDate();
  }
}
