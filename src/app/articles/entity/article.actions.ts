import { Action } from "@ngrx/store";
import { Update } from "@ngrx/entity";
import { Article } from "./article.model";

export enum ArticleActionTypes {
  // articles
  // load
  LoadArticlesRequest = "[Article] Load Articles Request",
  LoadArticlesSuccess = "[Article] Load Articles Success",
  LoadArticlesFailure = "[Article] Load Articles Failure",
  // add
  AddArticles = "[Article] Add Articles",
  UpsertArticles = "[Article] Upsert Articles",
  // update
  UpdateArticles = "[Article] Update Articles",
  // delete
  DeleteArticles = "[Article] Delete Articles",
  ClearArticles = "[Article] Clear Articles",
  // article
  // add
  AddArticle = "[Article] Add Article",
  AddArticleSuccess = "[Article] Add Article Success",
  AddArticleFailure = "[Article] Add Article Failure",
  // upsert
  UpsertArticle = "[Article] Upsert Article",
  // update
  UpdateArticle = "[Article] Update Article",
  UpdateArticleSuccess = "[Article] Update Article Success",
  UpdateArticleFailure = "[Article] Update Article Failure",
  // delete
  DeleteArticle = "[Article] Delete Article",
  DeleteArticleSuccess = "[Article] Delete Article Success",
  DeleteArticleFailure = "[Article] Delete Article Failure"
}

// articles
// load
export class LoadArticlesRequest implements Action {
  readonly type = ArticleActionTypes.LoadArticlesRequest;
}
export class LoadArticlesSuccess implements Action {
  readonly type = ArticleActionTypes.LoadArticlesSuccess;

  constructor(public payload: { articles: Article[] }) {}
}
export class LoadArticlesFailure implements Action {
  readonly type = ArticleActionTypes.LoadArticlesFailure;

  constructor(public payload: { error: string }) {}
}
// add
export class AddArticles implements Action {
  readonly type = ArticleActionTypes.AddArticles;

  constructor(public payload: { articles: Article[] }) {}
}
// upsert
export class UpsertArticles implements Action {
  readonly type = ArticleActionTypes.UpsertArticles;

  constructor(public payload: { articles: Article[] }) {}
}
// update
export class UpdateArticles implements Action {
  readonly type = ArticleActionTypes.UpdateArticles;

  constructor(public payload: { articles: Update<Article>[] }) {}
}
// delete
export class DeleteArticles implements Action {
  readonly type = ArticleActionTypes.DeleteArticles;

  constructor(public payload: { ids: string[] }) {}
}
// clear
export class ClearArticles implements Action {
  readonly type = ArticleActionTypes.ClearArticles;
}
// article
// add
export class AddArticle implements Action {
  readonly type = ArticleActionTypes.AddArticle;
}
export class AddArticleSuccess implements Action {
  readonly type = ArticleActionTypes.AddArticleSuccess;

  constructor(public payload: { article: Article }) {}
}
export class AddArticleFailure implements Action {
  readonly type = ArticleActionTypes.AddArticleFailure;

  constructor(public payload: string) {}
}
// upsert
export class UpsertArticle implements Action {
  readonly type = ArticleActionTypes.UpsertArticle;

  constructor(public payload: { article: Article }) {}
}
// update
export class UpdateArticle implements Action {
  readonly type = ArticleActionTypes.UpdateArticle;
}
export class UpdateArticleSuccess implements Action {
  readonly type = ArticleActionTypes.UpdateArticleSuccess;
  constructor(public payload: { id: number; article: Update<Article> }) {}
}
export class UpdateArticleFailure implements Action {
  readonly type = ArticleActionTypes.UpdateArticleFailure;
  constructor(public payload: string) {}
}
// delete
export class DeleteArticle implements Action {
  readonly type = ArticleActionTypes.DeleteArticle;
}
export class DeleteArticleSuccess implements Action {
  readonly type = ArticleActionTypes.DeleteArticleSuccess;
  constructor(public payload: { id: string }) {}
}
export class DeleteArticleFailure implements Action {
  readonly type = ArticleActionTypes.DeleteArticleFailure;
  constructor(public payload: { id: string }) {}
}

export type ArticleActions =
  // articles
  | LoadArticlesRequest
  | LoadArticlesSuccess
  | LoadArticlesFailure
  | AddArticles
  | UpsertArticles
  | UpdateArticles
  | DeleteArticles
  | ClearArticles
  // article
  // add
  | AddArticle
  | AddArticleSuccess
  | AddArticleFailure
  // upsert
  | UpsertArticle
  // update
  | UpdateArticle
  | UpdateArticleSuccess
  | UpdateArticleFailure
  // delete
  | DeleteArticle
  | DeleteArticleSuccess
  | DeleteArticleFailure;
