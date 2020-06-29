import {Injectable} from '@angular/core';
import {Article} from './article';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Article[];

  constructor() {
    this.articles = [
      {nr: 1, name: 'doniczka', price: 200, amount: 12},
      {nr: 2, name: 'sadzonka', price: 280, amount: 14},
      {nr: 3, name: 'nasiona', price: 40, amount: 16}
    ];
  }

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }
}
