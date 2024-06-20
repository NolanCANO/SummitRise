import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PricesComponent } from './prices/prices.component';

import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'tarifs', component: PricesComponent },
  { path: 'news', loadComponent: () => import('./news-page/news-page.component').then(m => m.NewsPageComponent)},
  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent)}
]