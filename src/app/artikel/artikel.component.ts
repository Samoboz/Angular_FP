import { Component } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-artikel',
  standalone: true,
  imports: [],
  templateUrl: './artikel.component.html',
  styleUrl: './artikel.component.css'
})
export class ArtikelComponent {
 article: Article = new Article(
    1,
    'Mein erster Artikel',
    'Fabian',
    '2026-06-07',
    'Dies ist der Inhalt meines ersten Blogartikels.'
  );
}
