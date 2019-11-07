import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nr-fieldset',
  // templateUrl: './fieldset.component.pug',
  template: `
<fieldset class="fieldset">
  <legend>标题</legend>
  <ng-content></ng-content>
</fieldset>
  `
})
export class FieldsetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
