import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../user.service';
import { IUser } from '../../models/IUser';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../common/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  credentials: any = {
    email: 'bottle@gmail.com',
    password: 'Bottle123@',
  };

  token: string = '';

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {}
  // submit(form: NgForm) {}
  //   console.log(form);

  //   console.log(user);
  //   this.userService.loginUser(user).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //   });
  // }

  submit(form: NgForm) {
    const user = {
      email: form.value.email,
      password: form.value.password,
    } as Omit<IUser, 'name'>;
    this.authService.login(user).subscribe({
      next: (loginResponse) => {
        localStorage.setItem('Authorization', loginResponse.token);
        localStorage.setItem('email', loginResponse.email);
        this.router.navigateByUrl('/calender');
        console.log(loginResponse);
      },
      error: (error) => {
        alert('either email or passoword is wrong');
      },
    });
  }
}
