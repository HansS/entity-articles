import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// feature
import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticlesComponent } from "./articles.component";
import { ArticleListComponent } from "./components/article-list/article-list.component";
import { ArticleAddComponent } from "./components/article-add/article-add.component";
import { ArticleEditComponent } from "./components/article-edit/article-edit.component";
import { ArticleDetailsComponent } from "./components/article-details/article-details.component";
import { StoreModule } from "@ngrx/store";

import * as fromArticle from "./entity/article.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ArticleEffects } from "./entity/article.effects";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArticlesRoutingModule,
    StoreModule.forFeature("article", fromArticle.reducer),
    EffectsModule.forFeature([ArticleEffects])
  ],
  declarations: [
    ArticlesComponent,
    ArticleListComponent,
    ArticleAddComponent,
    ArticleEditComponent,
    ArticleDetailsComponent
  ]
})
export class ArticlesModule {}
