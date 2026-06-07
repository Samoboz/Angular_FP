export class Article {
  id: number;
  titel: string;
  autor: string;
  datum: string;
  content: string;

  constructor(
    id: number,
    titel: string,
    autor: string,
    datum: string,
    content: string
  ) {
    this.id = id;
    this.titel = titel;
    this.autor = autor;
    this.datum = datum;
    this.content = content;
  }
}