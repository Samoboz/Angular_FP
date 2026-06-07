import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { KopfbereichComponent } from './kopfbereich/kopfbereich.component';
import { ArtikelComponent } from './artikel/artikel.component';
import { FussbereichComponent } from './fussbereich/fussbereich.component';
import { ARTICLES } from './article-data';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  // standalone hinzufügen und true setzen
  standalone: true,
  // NgFor muss bei Standalone-Komponenten in imports stehen, wenn du *ngFor verwenden willst
  imports: [RouterOutlet, NgFor, KopfbereichComponent, ArtikelComponent, FussbereichComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  articles = ARTICLES;
}