import { NgModule, forwardRef } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule
  ],
  exports: [CheckboxComponent]
})
export class CheckboxModule { }
