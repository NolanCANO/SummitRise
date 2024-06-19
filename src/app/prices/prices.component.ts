import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatTabsModule} from '@angular/material/tabs';
import { ForfaitComponent } from '../forfait/forfait.component';
import { AbonnementComponent } from '../abonnement/abonnement.component';
import { PriceSwitchService } from '../price-switch.service';
import { NeededModule } from '../needed/needed.module';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [ 
    CommonModule,
    MatSlideToggleModule, 
    MatTooltipModule, 
    MatTabsModule, 
    ForfaitComponent,
    AbonnementComponent,
    NeededModule
  ],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent {
  forfaitData = [
    {
      subtitle: 'Forfait',
      title: '1 session adulte',
      description: 'Valable toute la journée jusqu\'à ce que vos bras explosent',
      details: 'Happy Hour : de 7h à 16h puis 21h30 à minuit en semaine. A partir de 18h30 les w-e et jours fériés.',
      note: 'Première fois ? 8€ la session + prêt de chaussons !',
      discount: 40,
      regularPrice: 18,
      reducedPrice: 16
    },
    {
      subtitle: 'Forfait',
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
      subtitle: 'Forfait',
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
      subtitle: 'Forfait',
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
      subtitle: 'Forfait',
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
      subtitle: 'Forfait',
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

  forfaitKidData = [
    {
      subtitle: 'Forfait',
      title: '1 session kids',
      description: 'Valable toute la journée, jusqu’à ce qu’ils n’aient plus d’énergie !',
      details: 'Première fois ? 8€ la session + prêt de chaussons !',
      note: '(à partir de 4 ans)',
      regularPrice: 10,
      reducedPrice: 10
    },
    {
      subtitle: 'Forfait',
      title: '10 sessions kids',
      description: 'Valable toute la journée, jusqu’à ce qu’ils n’aient plus d’énergie !',
      details: '',
      note: '',
      regularPrice: 80,
      reducedPrice: 80
    }
  ];

  abonnementKidData = {
      subtitle: 'Forfait',
      title: 'Infinity kids',
      description: 'Escalade illimitée pour les enfants de 6 à 12 ans',
      details: '',
      note: '',
      regularPrice: 33,
      reducedPrice: 33,
      regularPrice2: 330,
      reducedPrice2: 330
  }

  kdoData = [
    {
      subtitle: 'La carte découverte',
        title: 'Forfait 1 session',
        description: 'Entrée valable toute une journée, jusqu’à ce que les bras explosent! Accès au sauna compris si applicable.',
        details: '',
        note: '',
        regularPrice: 17,
        reducedPrice: 17,
    },
    {
      subtitle: 'La carte assidue',
        title: 'Forfait 10 sessions',
        description: '10 entrées d’une journée. Valable à vie (on ne blague pas). A partager à 2 ou à garder pour soi.',
        details: '',
        note: '',
        regularPrice: 140,
        reducedPrice: 140,
    },
    {
      subtitle: 'La carte passion',
        title: 'Forfait infinity',
        description: 'Là on parle. Offrez un an d’escalade, un accès illimité à tous les climbings de SummitRise',
        details: '',
        note: '',
        regularPrice: 600,
        reducedPrice: 600,
    }
  ]

  constructor(private switchService: PriceSwitchService) {}

  onToggleChange(event: any) {
    this.switchService.setReduced(event.checked);
  }
}
