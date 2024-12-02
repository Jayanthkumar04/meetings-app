import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { MenuComponent } from './features/menu/menu.component';
import { CalenderComponent } from './features/calender/calender.component';
import { MeetingsComponent } from './features/meetings/meetings.component';
import { TeamsComponent } from './features/teams/teams.component';

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
    path: 'features',
    component: MenuComponent,
    title: 'calender',
    children: [
      {
        path: '',
        component: CalenderComponent,
        title: 'Calenders',
      },
      {
        path: 'meetings',
        component: MeetingsComponent,
        title: 'Meetings',
      },
      {
        path: 'teams',
        component: TeamsComponent,
        title: 'Teams',
      },
    ],
  },
];
