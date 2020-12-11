// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class RetourService {
//   private baseURL = 'http://localhost:8080/product';
//   username = 'manager';
//   password = 'admin-password';
//
//   constructor(private http: HttpClient) { }
//
//
//   createProduct(product: Product): Observable<Product> {
//     const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
//     return this.http.post<Product>(this.baseURL + '/create', product, {headers, responseType: 'text' as 'json'});
//   }
//
//   getProducts(): Observable<Product[]> {
//     const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
//     return this.http.get<Product[]>(this.baseURL + '/list', {headers});
//     // .pipe(catchError(this.handleErrors<IProduct[]>('getProducts', [])));
//   }
//
//   getProduct(id: number): Observable<Product> {
//     const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
//     return this.http.get<Product>(this.baseURL + '/read/' + id, {headers}
//     );
//   }
//
//   updateProduct(product: Product): Observable<Product>{
//     const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
//     return this.http.post<Product>(this.baseURL + '/update', product, {headers});
//   }
//
//   deleteProduct(id: number){
//     const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
//     return this.http.delete<boolean>(this.baseURL + '/delete/' + id, {headers, responseType: 'text' as 'json'});
//   }
//
//
// }
