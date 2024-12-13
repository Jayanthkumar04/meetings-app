import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FeaturesService } from '../../features.service';
import { IMeetings, Users } from '../../../models/IMeetings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-meeting',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-meeting.component.html',
  styleUrl: './add-meeting.component.scss',
})
export class AddMeetingComponent {
  constructor(
    private featureService: FeaturesService,
    private router: Router
  ) {}
  addTheMeeting(form: NgForm) {
    const sh = form.value.startHr;
    const sm = form.value.startMin;
    const eh = form.value.EndHr;
    const em = form.value.endMin;
    const atten = form.value.teams;

    const attendeesArray = Array.isArray(atten)
      ? atten // If already an array, use it directly
      : atten
      ? atten.split(',').map((item: string) => item.trim()) // Split by commas and trim any extra spaces
      : []; // If no value, use an empty array

    console.log('attendees', attendeesArray);
    // const attendeesArray = Array.isArray(atten) ? atten : atten ? [atten] : [];

    const formAdd: Omit<IMeetings, '_id'> = {
      name: form.value.name,
      startTime: { hours: sh, minutes: sm },
      endTime: { hours: eh, minutes: em },
      date: form.value.date,
      description: form.value.description,
      attendees: attendeesArray,
    };

    console.log('helllljfl', formAdd);
    this.featureService.addMeeting(formAdd).subscribe({
      next: (data) => {
        console.log(data);
        alert('form added successfully');
        this.router.navigateByUrl('/meetings');
      },
    });

    console.log(formAdd);
  }
}
