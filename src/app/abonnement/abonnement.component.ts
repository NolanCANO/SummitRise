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
  selector: 'app-abonnement',
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
  templateUrl: './abonnement.component.html',
  styleUrl: './abonnement.component.css'
})
export class AbonnementComponent {
  @Input() abonnement: any;
  @Input() black: boolean = false; 

  isReduced$: Observable<boolean>;
  price$: Observable<number>;
  price2$: Observable<number>;

  constructor(private switchService: PriceSwitchService) {
    this.isReduced$ = this.switchService.isReduced$;
    this.price$ = this.isReduced$.pipe(
      map(isReduced => isReduced ? this.abonnement.reducedPrice : this.abonnement.regularPrice)
    );
    this.price2$ = this.isReduced$.pipe(
      map(isReduced => isReduced ? this.abonnement.reducedPrice2 : this.abonnement.regularPrice2)
    );
  }
}
