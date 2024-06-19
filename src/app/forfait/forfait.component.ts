import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { HappyHourPipe } from '../happyhour.pipe';
import { CurrencyPipe } from '@angular/common';

import { PriceSwitchService } from '../price-switch.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-forfait',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule,
    HappyHourPipe,
    CurrencyPipe
  ],
  templateUrl: './forfait.component.html',
  styleUrl: './forfait.component.css'
})
export class ForfaitComponent {
  @Input() forfait: any;
  @Input() black: boolean = false; 

  isReduced$: Observable<boolean>;
  price$: Observable<number>;

  constructor(private switchService: PriceSwitchService) {
    this.isReduced$ = this.switchService.isReduced$;
    this.price$ = this.isReduced$.pipe(
      map(isReduced => isReduced ? this.forfait.reducedPrice : this.forfait.regularPrice)
    );
  }
}
