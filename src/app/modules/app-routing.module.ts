import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { UnauthenticatedGuard } from '../guards/unauthenticated.guard';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthenticatedGuard] },
  { path: "login", component: LoginComponent, canActivate: [UnauthenticatedGuard] },
  { path: "register", component: RegisterComponent, canActivate: [UnauthenticatedGuard] },
  { path: "**", component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
