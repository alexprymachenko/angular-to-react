import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { IProduct } from "../../interfaces/app.interfaces";
import { CommonModule } from "@angular/common";
import { ListItemComponent } from "../list-item/list-item.component";
import { FocusKeyManager } from "@angular/cdk/a11y";
import { ENTER } from "@angular/cdk/keycodes";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: IProduct[] = [];
  isLoading = false;
  apiService: ApiService = inject(ApiService);

  @ViewChildren(ListItemComponent) items: QueryList<ListItemComponent> | undefined;

  private keyManager: FocusKeyManager<ListItemComponent> | undefined;
  model = '';

  constructor() {
    this.isLoading = true;
    this.apiService.getProducts().then((reponse) => {
      this.products = reponse.products;
      this.isLoading = false;
    });
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.keyManager = new FocusKeyManager(this.items).withWrap();
  }

  onKeydown(event: any) {
    if (event.keyCode === ENTER) {
      // @ts-ignore
      this.model = this.keyManager.activeItem.item.name;
    } else {
      // @ts-ignore
      this.keyManager.onKeydown(event);
    }
  }
}
