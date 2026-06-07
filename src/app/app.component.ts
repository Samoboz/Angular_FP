import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArtikelComponent } from './artikel/artikel.component';

@Component({
  selector: 'app-root',
  //standalone hinzufügen hier
  standalone: true,
  imports: [RouterOutlet, ArtikelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'praktikum5';
}
