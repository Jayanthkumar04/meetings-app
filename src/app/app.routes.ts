import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { MenuComponent } from './features/menu/menu.component';
import { CalenderComponent } from './features/calender/calender.component';
import { MeetingsComponent } from './features/meetings/meetings.component';
import { TeamsComponent } from './features/teams/teams.component';
import { SearchMeetingsComponent } from './features/meetings/search-meetings/search-meetings.component';
import { AddMeetingComponent } from './features/meetings/add-meeting/add-meeting.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login here',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Registration Page',
  },
  {
    path: 'calender',
    component: MenuComponent,
    children: [
      {
        path: '',
        component: CalenderComponent,
        title: 'Calender',
      },
    ],
  },

  {
    path: 'meetings',
    component: MenuComponent,
    children: [
      {
        path: '',
        component: MeetingsComponent,
        children: [
          {
            path: '',
            component: SearchMeetingsComponent,
            title: 'Search/filter meeting',
          },
        ],
      },
    ],
  },
  {
    path: 'meetings',
    component: MenuComponent,
    children: [
      {
        path: '',
        component: MeetingsComponent,
        children: [
          {
            path: 'search',
            component: SearchMeetingsComponent,
            title: 'Search/filter meeting',
          },
          {
            path: 'addMeeting',
            component: AddMeetingComponent,
            title: 'AddMeeting',
          },
        ],
      },
    ],
  },

  {
    path: 'teams',
    component: MenuComponent,
    children: [
      {
        path: '',
        component: TeamsComponent,
        title: 'Teams',
      },
    ],
  },
];
