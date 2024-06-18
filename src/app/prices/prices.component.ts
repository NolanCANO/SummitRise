import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatTabsModule} from '@angular/material/tabs';
import { ForfaitComponent } from '../forfait/forfait.component';
import { AbonnementComponent } from '../abonnement/abonnement.component';
import { PriceSwitchService } from '../price-switch.service';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [ 
    CommonModule,
    MatSlideToggleModule, 
    MatTooltipModule, 
    MatTabsModule, 
    ForfaitComponent,
    AbonnementComponent
  ],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent {
  forfaitData = [
    {
      title: '1 session adulte',
      description: 'Valable toute la journée jusqu\'à ce que vos bras explosent',
      details: 'Happy Hour : de 7h à 16h puis 21h30 à minuit en semaine. A partir de 18h30 les w-e et jours fériés.',
      note: 'Première fois ? 8€ la session + prêt de chaussons !',
      discount: 40,
      regularPrice: 18,
      reducedPrice: 16
    },
    {
      title: '10 sessions adulte',
      description: 'Valable à vie, on ne blague pas. A partager à 2, ou à garder pour soi.',
      details: '',
      note: '',
      discount: 40,
      regularPrice: 150,
      reducedPrice: 130
    }
  ];

  abonnementData = [
    {
      title: 'Happy Hour',
      description: 'De la grimpe dans du lun-ven avant 16h ou après 21h30. Week-end et jours fériers après 18h30.',
      details: '',
      note: '',
      regularPrice: 32,
      reducedPrice: 27,
      regularPrice2: 350,
      reducedPrice2: 280
    },
    {
      title: 'Infinity adulte',
      description: 'De la grimpe en illimité et des privilèges SummitRise tous les mois. A vous de jouer !',
      details: '',
      note: '10% dans nos bars & cantines ',
      regularPrice: 55,
      reducedPrice: 48,
      regularPrice2: 600,
      reducedPrice2: 520
    },
    {
      title: 'Infinity duo',
      description: 'De la grimpe en illimité et des privilèges SummitRise tous les mois. A partager avec votre autre moitié.',
      details: '',
      note: '10% dans nos bars & cantines ',
      regularPrice: 95,
      reducedPrice: 85,
      regularPrice2: 995,
      reducedPrice2: 885
    },
    {
      title: 'Infinity elevated',
      description: 'De la grimpe ET 1 cours de yoga par mois, ainsi que des privilèges SummitRise tous les mois. Vous ne pourrez plus dire que vous n’êtes pas assez souple !',
      details: '',
      note: '10% dans nos bars & cantines ',
      regularPrice: 80,
      reducedPrice: 70,
      regularPrice2: 800,
      reducedPrice2: 700
    }
  ];

  constructor(private switchService: PriceSwitchService) {}

  onToggleChange(event: any) {
    this.switchService.setReduced(event.checked);
  }
}
