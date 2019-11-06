import { Component, Input, Output, EventEmitter, ChangeDetectorRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'nr-checkbox',
  templateUrl: './checkbox.component.pug',
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
  disabled: boolean = false

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
    this.onModelChange(this.checked)
    this.onChange.emit(this.checked)
  }

  writeValue(model) {
    this.model = model
    this.checked = model
    this.cd.markForCheck()
  }

  registerOnChange(fn: Function) {
    this.onModelChange = fn
  }

  registerOnTouched(fn: Function) {
    this.onModelTouched = fn
  }

}
