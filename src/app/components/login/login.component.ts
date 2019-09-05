import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  inOnProgress: boolean = false
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  onSubmit() {
    this.inOnProgress = true
    this.service.loginUser(this.form.value).subscribe((loggedIn: Boolean) => {
      let message: string;
      if (loggedIn) {
        this.router.navigate(['/home'])
        message = "You are connected"
      } else message = "Something went wrong, try again."
      this._snackBar.open(message, null, {
        duration: 2000,
      });
      this.inOnProgress = false
    }, err => {
      this._snackBar.open("Something went wrong, try again.", null, {
        duration: 2000,
      });
      this.inOnProgress = false
    })
  }

  get email() { return this.form.get('email') }
  get password() { return this.form.get('password') }

}
