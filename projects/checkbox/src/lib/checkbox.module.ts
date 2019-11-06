import { NgModule, forwardRef } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule
  ],
  exports: [CheckboxComponent]
})
export class CheckboxModule { }
