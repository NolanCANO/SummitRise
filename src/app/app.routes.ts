import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PricesComponent } from './prices/prices.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tarifs', component: PricesComponent }
];
