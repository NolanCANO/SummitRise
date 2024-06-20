import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NeededModule } from '../needed/needed.module';


@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, NeededModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['']);
  }
}
