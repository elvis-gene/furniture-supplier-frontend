import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IProduct} from '../models/product.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = 'http://localhost:8080/product';
  username = 'manager';
  password = 'admin-password';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.get<IProduct[]>(this.baseURL + '/list', {headers});
      // .pipe(catchError(this.handleErrors<IProduct[]>('getProducts', [])));
  }

  getProduct(id: number): Observable<IProduct> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.get<IProduct>(this.baseURL + '/find/' + id,
      {headers}
    );
  }

  private handleErrors<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
