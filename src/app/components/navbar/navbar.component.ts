import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private service: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  get isAuthenticated() {
    return this.service.isLoggedIn
  }

  logoutUser() {
    this.service.logoutUser()
    this.router.navigate(['/'])

    this._snackBar.open('User disconnected', null, {
      duration: 2000,
    });
  }


}
