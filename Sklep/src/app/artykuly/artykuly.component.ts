import { Component, OnInit } from '@angular/core';
import {Article} from "../article";
import {ArticleService} from "../article.service";

@Component({
  selector: 'app-artykuly',
  templateUrl: './artykuly.component.html',
  styleUrls: ['./artykuly.component.css']
})
export class ArtykulyComponent implements OnInit {

  private articleList: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(articles => {
      this.articleList = articles;
    });
  }
}