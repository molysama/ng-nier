import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nr-content',
  template: `
<div class="content">
  <ng-content></ng-content>
</div>
  `,
  styles: []
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
