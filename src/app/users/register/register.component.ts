import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { NgForm, NgModel, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router) {}
  submit(form: NgForm) {
    console.log(form);
    const user = {
      name: form.value.name,
      username: form.value.email,
      password: form.value.password,
    };

    console.log(user);

    if (form.value.password === form.value.password2) {
      this.userService.addUser(user).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigateByUrl('/login');
        },
      });
    } else {
      alert(
        'the password and confirm password are not correct please check it'
      );
    }
  }
}
