import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromArticle from "./Article.reducer";

export const selectArticleState = createFeatureSelector<fromArticle.State>(
  "article"
);
export const getSelectedArticleId = (state: fromArticle.State) =>
  state.selectedArticleId;

export const selectArticleIds = createSelector(
  selectArticleState,
  fromArticle.selectIds
);
export const selectArticleEntities = createSelector(
  selectArticleState,
  fromArticle.selectEntities
);
export const selectAllArticles = createSelector(
  selectArticleState,
  fromArticle.selectAll
);
export const selectArticleTotal = createSelector(
  selectArticleState,
  fromArticle.selectTotal
);
export const selectCurrentArticleId = createSelector(
  selectArticleState,
  getSelectedArticleId
);
export const selectCurrentArticle = createSelector(
  selectArticleEntities,
  selectCurrentArticleId,
  (entities, id) => entities[id]
);
