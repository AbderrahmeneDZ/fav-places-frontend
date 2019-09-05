import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/validators/passwordsValidator';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  inOnProgress: boolean = false

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, { validators: PasswordValidator.passwordsShouldMatch })

  onSubmit() {
    this.inOnProgress = true
    this.service.registerUser(this.form.value).subscribe(() => {
      this.router.navigate(['/login'])
      this._snackBar.open("User created !!", null, {
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
  get confirmPassword() { return this.form.get('confirmPassword') }


}
