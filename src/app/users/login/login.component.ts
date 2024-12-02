import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../user.service';
import { IUser } from '../../models/IUser';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  token: string = '';

  constructor(private userService: UserService) {}
  submit(form: NgForm) {
    console.log(form);
    const user = {
      email: form.value.email,
      password: form.value.password,
    } as Omit<IUser, 'name'>;

    console.log(user);
    this.userService.loginUser(user).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
