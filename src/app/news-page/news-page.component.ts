import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { NewsComponent } from '../news/news.component';
import { NeededModule } from '../needed/needed.module';

interface NewsItem {
  title: string;
  content: string;
  imageUrl: string;
}

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [
    CommonModule,
    NeededModule,
    MatButtonModule,
    MatGridListModule,
    NewsComponent
  ],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent {
  allActus: NewsItem[] = [
    { title: 'Collab Apple', content: 'Une chance unique de gagner un nouveau téléphone', imageUrl: 'img/actu1.jpg' },
    { title: 'Nouvelle Prise', content: 'Un nouveau stock de prise unique vien d\'arriver à SummitRise !', imageUrl: 'img/actu2.jpg' },
    { title: 'Plat Unique', content: 'Une nouvelle variété de plats a été ajoutée au menu.', imageUrl: 'img/actu3.jpg' },
    { title: 'Soirée Jeu', content: 'Nous organisons une soirée jeu vendredi 27 septembre de 18h à 21h', imageUrl: 'img/actu4.jpg' },
    { title: 'Concour escaclade', content: 'Un concours pour le titre de champion départemental aura lieu lundi prochain', imageUrl: 'img/actu5.jpg' },
    { title: 'Via Ferrata', content: 'Une Via Ferrata est organisée à Saint-Antonin en août. Pensez à réserver votre place !', imageUrl: 'img/actu6.jpg' },
    { title: 'Offre Flash', content: 'Du 2 au 28 Juin, profiter d\'une entrée simple à 7€ et des carnets 10 entrées à 60€', imageUrl: 'img/actu7.jpg' },
  ];
  displayedActus: NewsItem[] = [];
  itemsToShow = 6;

  constructor() {
    this.displayedActus = this.allActus.slice(0, this.itemsToShow);
  }

  loadMore() {
    const next = this.displayedActus.length + this.itemsToShow;
    this.displayedActus = this.allActus.slice(0, next);
  }
}
