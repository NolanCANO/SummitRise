import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        { path: '', component: HomeComponent }
      ])
    )
  ]
}).catch(err => console.error(err));
