import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private productsUrl = 'https://dummyjson.com/products';

  async getProducts(): Promise<{ products: IProduct[] }> {
    const data = await fetch(this.productsUrl);
    return await data.json() ?? [];
  };
}
