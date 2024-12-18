import { Component, OnInit } from '@angular/core';
import { ITeams } from '../../models/ITeams';
import { FeaturesService } from '../features.service';
import { CommonModule } from '@angular/common';
import { TeamsService } from '../teams.service';
import { IMeetUsers } from '../../models/IMeetUser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
})
export class TeamsComponent implements OnInit {
  teams!: ITeams[];
  memberId = 'selectMember';

  allUsers!: IMeetUsers[];
  constructor(
    private teamService: TeamsService,
    private featureService: FeaturesService
  ) {}
  ngOnInit(): void {
    this.getTeams();
    this.getAllUsers();
  }
  getAllUsers() {
    this.featureService.getAllUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.allUsers = data;
      },
    });
  }
  getTeams() {
    console.log('cmng');
    this.teamService.getTeams().subscribe({
      next: (data) => {
        console.log(data);
        this.teams = data;
      },
    });
  }

  excuseYourself(id: string) {
    this.teamService.excuseYourself(id).subscribe({
      next: (data) => {
        console.log('data', data);
        this.getTeams();
      },
    });
    console.log(id);
  }
}
