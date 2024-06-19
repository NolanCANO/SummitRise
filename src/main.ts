import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { ProfileComponent } from './app/profile/profile.component';
import { AuthGuard } from './app/auth.guard';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomeComponent } from './app/home/home.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent },
        { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      ])
    ), 
    provideHttpClient(),
    provideAnimations()
  ]
}).catch(err => console.error(err));
