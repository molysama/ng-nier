import { Component, Input, Output, EventEmitter, ChangeDetectorRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'nr-checkbox',
  // templateUrl: './checkbox.component.pug',
  template: `
<div class="nr-checkbox" (click)="onClick($event)">
  <div [ngClass]="{'label': true, 'disabled': disabled, 'is-checked': checked}">{{label}}</div>
</div>
`,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {

  @Input()
  label: string = ''

  @Input()
  value: boolean

  @Input()
  disabled: boolean

  @Output()
  onChange: EventEmitter<any> = new EventEmitter()

  model
  onModelChange: Function = () => {}
  onModelTouched: Function = () => {}

  constructor(private cd: ChangeDetectorRef) {}

  checked: boolean = false

  onClick(event) {
    event.preventDefault()
    if (this.disabled) {
      return
    }

    this.checked = !this.checked
    this.updateModel()
  }

  updateModel() {
    if (Object.prototype.toString.call(this.model) === '[object Array]') {
      if (this.checked) {
        this.addValue()
      } else {
        this.removeValue()
      }
      this.onModelChange(this.model)
    } else {
      this.onModelChange(this.checked)
    }
    this.onChange.emit(this.checked)
  }

  addValue() {
    if (this.value !== undefined) {
      this.model = [...this.model, this.value]
    }
  }
  removeValue() {
    if (this.value !== undefined) {
      this.model = this.model.filter(v => v !== this.value)
    }
  }

  writeValue(model) {
    this.model = model
    if (Object.prototype.toString.call(this.model) === '[object Array]') {
      if (this.value !== undefined) {
        this.checked = this.model.indexOf(this.value) > -1
      }
    } else {
      this.checked = this.model
    }
    this.cd.markForCheck()
  }

  registerOnChange(fn: Function) {
    this.onModelChange = fn
  }

  registerOnTouched(fn: Function) {
    this.onModelTouched = fn
  }

}
