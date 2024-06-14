import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        { path: '', redirectTo: '/login', pathMatch: 'full' },
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent }
      ])
    ), provideAnimationsAsync()
  ],
}).catch(err => console.error(err));
