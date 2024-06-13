import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { NewsComponent } from '../news/news.component';

interface NewsItem {
  title: string;
  content: string;
}

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MatButtonModule,
    MatGridListModule,
    NewsComponent
  ],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent {
  allActus: NewsItem[] = Array.from({ length: 21 }, (_, i) => ({
    title: `Actu ${i + 1}`,
    content: `Content of the news ${i + 1}`
  }));
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
