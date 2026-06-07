import { Component, Input, OnInit } from '@angular/core';
import { NgFor, KeyValuePipe } from '@angular/common';
import { Article } from '../article';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, KeyValuePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  @Input() articles: Article[] = [];
  tagMap = new Map<string, number>();

  ngOnInit(): void {
    this.tagMap = new Map<string, number>();

    for (const article of this.articles) {
      const words = article.titel.toLowerCase().split(/\s+/);

      for (const word of words) {
        this.tagMap.set(word, (this.tagMap.get(word) ?? 0) + 1);
      }
    }
  }
}