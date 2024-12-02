import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { MenuComponent } from './features/menu/menu.component';

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
    title: 'Features to update',
  },
];
