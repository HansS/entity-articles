import { ArticleService } from "./../article.service";
import { Injectable } from "@angular/core";
// ngrx
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as articleActions from "./article.actions";
import { Action } from "@ngrx/store";
// rxjs
import { Observable, of } from "rxjs";
import { mergeMap, map, tap, catchError } from "rxjs/operators";
import { Article } from "./article.model";

@Injectable()
export class ArticleEffects {
  constructor(private actions$: Actions, private service: ArticleService) {}

  @Effect()
  loadArticles$: Observable<Action> = this.actions$.pipe(
    ofType(articleActions.ArticleActionTypes.LoadArticlesRequest),
    mergeMap((actions: articleActions.LoadArticlesRequest) =>
      this.service.getArticles().pipe(
        tap((articles: Article[]) => console.log),
        map(
          (articles: Article[]) =>
            new articleActions.LoadArticlesSuccess({ articles })
        ),
        catchError(err => of(new articleActions.LoadArticlesFailure(err)))
      )
    )
  ); // effect loadArticles

  // @Effect()
  // loadArticle$: Observable<Action> = this.actions$.pipe(
  //   ofType<articleActions.AddArticle>(
  //     articleActions.ArticleActionTypes.AddArticle
  //   ),
  //   mergeMap((action: articleActions.AddArticle) =>
  //     this.service.getArticleById(action.payload).pipe(
  //       map((article: Article) => new articleActions.AddArticle( article ))
  //       // catchError(err => of(new articleActions.AddArticleFailure(err)))
  //     )
  //   )
  // );

  @Effect()
  createArticle$: Observable<Action> = this.actions$.pipe(
    ofType<articleActions.AddArticle>(
      articleActions.ArticleActionTypes.AddArticle
    ),
    map((action: articleActions.AddArticleSuccess) => action.payload),
    mergeMap((article: Article) =>
      this.service.createArticle(article).pipe(
        map(
          (newarticle: Article) =>
            new articleActions.AddArticleSuccess({ article: newarticle })
        ),
        catchError(err => of(new articleActions.AddArticleFailure(err)))
      )
    )
  );

  @Effect()
  updateArticle$: Observable<Action> = this.actions$.pipe(
    ofType<articleActions.UpdateArticle>(
      articleActions.ArticleActionTypes.UpdateArticle
    ),
    map((action: articleActions.UpdateArticleSuccess) => action.payload),
    mergeMap((article: Article) =>
      this.service.updateArticle(article).pipe(
        map(
          (updateArticle: Article) =>
            new articleActions.UpdateArticleSuccess({
              id: updateArticle.id,
              article: updateArticle
            })
        ),
        catchError(err => of(new articleActions.UpdateArticleFailure(err)))
      )
    )
  );

  @Effect()
  deleteArticle$: Observable<Action> = this.actions$.pipe(
    ofType<articleActions.DeleteArticle>(
      articleActions.ArticleActionTypes.DeleteArticle
    ),
    map((action: articleActions.DeleteArticleSuccess) => action.payload),
    mergeMap((id: number) =>
      this.service.deleteArticle(id).pipe(
        map(() => new articleActions.DeleteArticleSuccess(id)),
        catchError(err => of(new articleActions.DeleteArticleFailure(err)))
      )
    )
  );
} // class
