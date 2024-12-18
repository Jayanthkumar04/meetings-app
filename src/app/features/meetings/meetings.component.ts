import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-meetings',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.scss',
})
export class MeetingsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllMeetings();
  }

  getAllMeetings() {
    this.http.get('https://localhost:7110/api/Meetings/users').subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        alert('some error from api');
      },
    });
  }
}
