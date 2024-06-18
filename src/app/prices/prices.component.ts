import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatTabsModule} from '@angular/material/tabs';
import { ForfaitComponent } from '../forfait/forfait.component';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [ MatSlideToggleModule, MatTooltipModule, MatTabsModule, ForfaitComponent ],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent {
  sessions = [
    {
      name: "1 session adulte",
      prices: {
        default: 18,
        happy: 11,
        reduced: 16,
        reduced_happy: 9
      },
      desc: [
        "Valable toute la journée jusqu’à ce que vos bras explosent.",
        "Happy Hour : de 7h à 16h puis 21h30 à minuit en semaine. A partir de 18h30 les w-e et jours fériés.",
        "<strong>Première fois ?</strong> 8€ la session + prêt de chaussons !"
      ],
      availability: false
    },
    {
      name: "1 session adulte",
      prices: {
        default: 18,
        happy: 11,
        reduced: 16,
        reduced_happy: 9
      },
      desc: [
        "Valable toute la journée jusqu’à ce que vos bras explosent.",
        "Happy Hour : de 7h à 16h puis 21h30 à minuit en semaine. A partir de 18h30 les w-e et jours fériés.",
        "<strong>Première fois ?</strong> 8€ la session + prêt de chaussons !"
      ],
      availability: false
    }
  ]
}
