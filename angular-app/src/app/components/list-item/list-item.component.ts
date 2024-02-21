import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: true,
  host: {
    'tabindex': '-1'
  },
  template: `<ng-content></ng-content>`
})
export class ListItemComponent {
  @Input() item: any;
  constructor(private host: ElementRef) { }

  focus() {
    this.host.nativeElement.focus();
  }
}
