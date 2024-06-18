import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-forfait-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './forfait.component.html',
  styleUrl: './forfait.component.css'
})
export class ForfaitComponent {
  @Input() sessions: any[] = [];
}
