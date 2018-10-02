import { Observable } from "rxjs";
import { Article } from "./entity/article.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private http: HttpClient) {}
  url = "http://localhost:3000/articles";
  loadArticles$() {
    return this.http.get<Article[]>(this.url);
  }
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }
  getArticleById(payload: number): Observable<Article> {
    return this.http.get<Article>(`${this.url}/${payload}`);
  }

  createArticle(payload: Article): Observable<Article> {
    return this.http.post<Article>(this.url, payload);
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http.patch<Article>(`${this.url}/${article.id}`, article);
  }

  deleteArticle(payload: number) {
    return this.http.delete(`${this.url}/${payload}`);
  }
} // service
