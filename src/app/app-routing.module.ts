import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "articles",
    loadChildren: "./articles/articles.module#ArticlesModule"
  },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
