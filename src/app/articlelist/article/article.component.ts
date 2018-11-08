import { Component, OnInit, Input} from '@angular/core';
import { Article } from './articleModel';

@Component({
  selector: 'app-article',
  inputs:['article'],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article:Article;
  constructor() { }

  ngOnInit() {
  }

}
