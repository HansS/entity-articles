import { createFeatureSelector } from "@ngrx/store";
import { createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Article } from "./article.model";
import { ArticleActions, ArticleActionTypes } from "./article.actions";

export interface State extends EntityState<Article> {
  selectedArticleId: number | null;
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  ids: [],
  entities: {},
  selectedArticleId: null
});

export function reducer(state = initialState, action: ArticleActions): State {
  switch (action.type) {
    // articles
    // load
    case ArticleActionTypes.LoadArticlesSuccess: {
      return adapter.addAll(action.payload.articles, state);
    }

    // delete
    case ArticleActionTypes.DeleteArticles: {
      return adapter.removeMany(action.payload.ids, state);
    }
    // clear
    case ArticleActionTypes.ClearArticles: {
      return adapter.removeAll(state);
    }
    // upsert
    case ArticleActionTypes.UpsertArticles: {
      return adapter.upsertMany(action.payload.articles, state);
    }
    // update
    case ArticleActionTypes.UpdateArticles: {
      return adapter.updateMany(action.payload.articles, state);
    }
    // article
    // add
    case ArticleActionTypes.AddArticleSuccess: {
      return adapter.addOne(action.payload.article, state);
    }
    // update
    case ArticleActionTypes.UpdateArticleSuccess: {
      return adapter.updateOne(action.payload.article, state);
    }
    // delete
    case ArticleActionTypes.DeleteArticleSuccess: {
      return adapter.removeOne(action.payload.id, state);
    }
    case ArticleActionTypes.UpsertArticle: {
      return adapter.upsertOne(action.payload.article, state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
