import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  http = inject(HttpClient);
  getName() {
    return new Promise((resolve, reject) => {
      resolve('Ali');
    });
  }

  getProducts(limit: number = 10, skip: number = 0) {
    return this.http.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`
    );
  }
}
