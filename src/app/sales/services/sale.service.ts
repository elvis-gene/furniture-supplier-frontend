import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Sale} from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private baseURL = 'http://localhost:8080/sale';
  username = 'manager';
  password = 'admin-password';

  constructor(private http: HttpClient) { }


  createSale(sale: Sale): Observable<Sale> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.post<Sale>(this.baseURL + '/create', sale, {headers, responseType: 'text' as 'json'});
  }

  getSales(): Observable<Sale[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.get<Sale[]>(this.baseURL + '/all', {headers});
    // .pipe(catchError(this.handleErrors<IProduct[]>('getProducts', [])));
  }

  getSale(id: number): Observable<Sale> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.get<Sale>(this.baseURL + '/read/' + id, {headers}
    );
  }

  updateSale(sale: Sale): Observable<Sale>{
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.post<Sale>(this.baseURL + '/update', sale, {headers});
  }

  deleteSale(id: number){
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.delete<boolean>(this.baseURL + '/delete/' + id, {headers, responseType: 'text' as 'json'});
  }


  private handleErrors<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
