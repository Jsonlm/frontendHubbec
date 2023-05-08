import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      Validators.minLength(15),
      Validators.maxLength(100)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z 0-9 \# \. \- ]*'),
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
  });

  constructor(private route: Router) {

  }

  ngOnInit(): void {
  }

  goRegister() {
    this.route.navigate(['/auth/register']);
  }

  goDashboard() {
    this.route.navigate(['/features/dashboard']);
  }
}
