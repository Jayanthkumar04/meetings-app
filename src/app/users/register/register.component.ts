import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { NgForm, NgModel, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private userService: UserService) {}
  submit(form: NgForm) {
    console.log(form);
    const user = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
    };

    console.log(user);
    this.userService.addUser(user).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
