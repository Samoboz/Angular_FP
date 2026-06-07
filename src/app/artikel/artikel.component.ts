import { Component, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-artikel',
  standalone: true,
  imports: [],
  templateUrl: './artikel.component.html',
  styleUrl: './artikel.component.css'
})
export class ArtikelComponent {
@Input() article!: Article;
// Das ! sagt Typescript, der Wert kommt später von außen aus dem Template der Root-Komponente
}
