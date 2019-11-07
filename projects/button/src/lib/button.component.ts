import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nr-button',
  // templateUrl: './button.component.pug',
  template: `
<button class="nr-button" type="button">
  <ng-content></ng-content>
</button>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
