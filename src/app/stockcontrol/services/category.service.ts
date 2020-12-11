import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseURL = 'http://localhost:8080/category';
  username = 'manager';
  password = 'admin-password';

  constructor(private http: HttpClient) { }

  createCategory(category: Category): Observable<Category> {
    console.log(category);
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.post<Category>(this.baseURL + '/create', category, {headers, responseType: 'text' as 'json'});
  }

  getCategories(): Observable<Category[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.get<Category[]>(this.baseURL + '/list', {headers});
  }

  getCategory(id: number): Observable<Category> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.get<Category>(this.baseURL + '/read/' + id, {headers}
    );
  }

  updateCategory(category: Category): Observable<Category>{
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.post<Category>(this.baseURL + '/update', category, {headers});
  }

  deleteCategory(id: number){
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.delete<boolean>(this.baseURL + '/delete/' + id, {headers, responseType: 'text' as 'json'});
  }

}
