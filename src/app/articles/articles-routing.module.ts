import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticlesComponent } from "./articles.component";
import { ArticleAddComponent } from "./components/article-add/article-add.component";
import { ArticleListComponent } from "./components/article-list/article-list.component";

const routes: Routes = [
  {
    path: "articles",
    component: ArticlesComponent,
    children: [
      { path: "list", component: ArticleListComponent },
      { path: "add", component: ArticleAddComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
