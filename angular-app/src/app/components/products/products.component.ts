import { FocusKeyManager } from "@angular/cdk/a11y";
import { ENTER } from "@angular/cdk/keycodes";
import { CommonModule } from "@angular/common";
import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import { IProduct } from "../../interfaces/app.interfaces";
import { ApiService } from "../../services/api.service";
import { ListItemComponent } from "../list-item/list-item.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: IProduct[] = [];
  isLoading = true;
  apiService: ApiService = inject(ApiService);

  @ViewChildren(ListItemComponent) items!: QueryList<ListItemComponent>;
  private keyManager!: FocusKeyManager<ListItemComponent>;
  selectedProduct!: IProduct | null;

  ngOnInit(): void {
    this.fetchData()
  }

  async fetchData() {
    try {
      const { products } = await this.apiService.getProducts();
      this.products = products;
      this.isLoading = false;
    } catch (e) {
      console.log('Fetch Data Error:', e);
    }
    this.isLoading = false;
  }

  ngAfterViewInit() {
    this.keyManager = new FocusKeyManager(this.items).withWrap();
  }

  onKeydown(event: KeyboardEvent) {
    if (event.keyCode === ENTER && this.keyManager.activeItem?.item) {
      this.selectedProduct = this.keyManager.activeItem.item;
      alert(this.selectedProduct.title);
    } else {
      this.keyManager.onKeydown(event);
    }
  }
}
