import { Component, OnInit, ElementRef, Directive } from '@angular/core';

@Component({
  selector: '[nr-title]',
  template: '<ng-content></ng-content>'
})
export class TitleComponent {

  constructor(
    public elementRef: ElementRef
  ) { 
    if (this._hasHostAttribute("nr-title")) {
      (elementRef.nativeElement as HTMLElement).classList.add('nr-title')
    }
  }

  private _hasHostAttribute(...attributes: string[]) {
    return attributes.some(attr => this.elementRef.nativeElement.hasAttribute(attr))
  }

}
