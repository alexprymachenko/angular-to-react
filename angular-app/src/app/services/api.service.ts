import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private productsUrl = 'https://dummyjson.com/products';

  async getProducts(): Promise<any> {
    const data = await fetch(this.productsUrl);
    return await data.json() ?? [];
  };
}
