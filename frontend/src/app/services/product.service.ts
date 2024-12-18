import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = '/api/products'; // Proxy URL for the backend

  constructor(private http: HttpClient) {}

  // Fetch all products
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Add a new product
  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }
}
