import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { Article } from "../../entity/article.model";
import * as fromArticles from "../../entity/article.reducer";
import * as articleActions from "../../entity/article.actions";
import * as articleSelectors from "../../entity/Article.selector";

@Component({
  selector: "article-list",
  templateUrl: "./article-list.component.html",

  styleUrls: ["./article-list.component.css"]
})
export class ArticleListComponent implements OnInit {
  constructor(private store: Store<fromArticles.State>) {}
  articles$: Observable<Article[]>;
  articles: Article[];
  ngOnInit() {
    this.store.dispatch(new articleActions.LoadArticlesRequest());
    this.articles$ = this.store.pipe(
      select(articleSelectors.selectAllArticles)
    );
    // this.error$ = this.store.pipe(select(fromCustomer.getError
  }
}
