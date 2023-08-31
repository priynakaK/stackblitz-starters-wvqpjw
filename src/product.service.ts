import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  standalone = true;
  URL = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}
  getProduct() {
    return this.http.get(this.URL);
  }
}
