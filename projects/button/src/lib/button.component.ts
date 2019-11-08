import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'nr-button',
  // templateUrl: './button.component.pug',
  template: `
<div class="inline-flex" [ngClass]="{'w-full': full}">
  <button class="nr-button flex-auto" type="button">
    <ng-content></ng-content>
  </button>
</div>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  full: boolean

  constructor(
    elementRef: ElementRef
  ) {
      if (elementRef.nativeElement.hasAttribute('w-full')) {
        this.full = true
      } else {
        this.full = false
      }
   }

  ngOnInit() {
  }

}
