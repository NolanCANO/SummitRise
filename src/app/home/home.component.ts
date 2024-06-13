import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeededModule } from '../needed/needed.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NeededModule
  ]
})
export class HomeComponent { }
