import { Component, ElementRef, Input } from '@angular/core';
import { IProduct } from '../../interfaces/app.interfaces';

@Component({
  selector: 'app-list-item',
  standalone: true,
  host: {
    'tabindex': '-1'
  },
  template: `<ng-content></ng-content>`
})
export class ListItemComponent {
  @Input() item!: IProduct;
  constructor(private host: ElementRef) { }

  focus() {
    this.host.nativeElement.focus();
  }
}
