/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class CheckboxComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.label = '';
        this.onChange = new EventEmitter();
        this.onModelChange = (/**
         * @return {?}
         */
        () => { });
        this.onModelTouched = (/**
         * @return {?}
         */
        () => { });
        this.checked = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        event.preventDefault();
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.updateModel();
    }
    /**
     * @return {?}
     */
    updateModel() {
        if (Object.prototype.toString.call(this.model) === '[object Array]') {
            if (this.checked) {
                this.addValue();
            }
            else {
                this.removeValue();
            }
            this.onModelChange(this.model);
        }
        else {
            this.onModelChange(this.checked);
        }
        this.onChange.emit(this.checked);
    }
    /**
     * @return {?}
     */
    addValue() {
        if (this.value !== undefined) {
            this.model = [...this.model, this.value];
        }
    }
    /**
     * @return {?}
     */
    removeValue() {
        if (this.value !== undefined) {
            this.model = this.model.filter((/**
             * @param {?} v
             * @return {?}
             */
            v => v !== this.value));
        }
    }
    /**
     * @param {?} model
     * @return {?}
     */
    writeValue(model) {
        this.model = model;
        if (Object.prototype.toString.call(this.model) === '[object Array]') {
            if (this.value !== undefined) {
                this.checked = this.model.indexOf(this.value) > -1;
            }
        }
        else {
            this.checked = this.model;
        }
        this.cd.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'nr-checkbox',
                // templateUrl: './checkbox.component.pug',
                template: `<div class="nr-checkbox" (click)="onClick($event)">
  <div [ngClass]="{'label': true, 'disabled': disabled, 'is-checked': checked}">{{label}}</div>
</div>`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CheckboxComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
CheckboxComponent.propDecorators = {
    label: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    onChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.label;
    /** @type {?} */
    CheckboxComponent.prototype.value;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.onChange;
    /** @type {?} */
    CheckboxComponent.prototype.model;
    /** @type {?} */
    CheckboxComponent.prototype.onModelChange;
    /** @type {?} */
    CheckboxComponent.prototype.onModelTouched;
    /** @type {?} */
    CheckboxComponent.prototype.checked;
    /**
     * @type {?}
     * @private
     */
    CheckboxComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLW5pZXIvY2hlY2tib3gvIiwic291cmNlcyI6WyJsaWIvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFpQnpFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFrQjVCLFlBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBZnpDLFVBQUssR0FBVyxFQUFFLENBQUE7UUFTbEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBR2hELGtCQUFhOzs7UUFBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUE7UUFDbEMsbUJBQWM7OztRQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQTtRQUluQyxZQUFPLEdBQVksS0FBSyxDQUFBO0lBRm9CLENBQUM7Ozs7O0lBSTdDLE9BQU8sQ0FBQyxLQUFLO1FBQ1gsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ3RCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFNO1NBQ1A7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUM1QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDcEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssZ0JBQWdCLEVBQUU7WUFDbkUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7YUFDaEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO2FBQ25CO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDL0I7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2xDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUN6QztJQUNILENBQUM7Ozs7SUFDRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQTtTQUN0RDtJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssZ0JBQWdCLEVBQUU7WUFDbkUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7YUFDbkQ7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUE7SUFDekIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFBO0lBQzFCLENBQUM7OztZQTFGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7O2dCQUV2QixRQUFRLEVBQUU7O09BRUw7Z0JBRUwsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUM7d0JBQ2hELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7Ozs7WUFqQmdELGlCQUFpQjs7O29CQW9CL0QsS0FBSztvQkFHTCxLQUFLO3VCQUdMLEtBQUs7dUJBR0wsTUFBTTs7OztJQVRQLGtDQUNrQjs7SUFFbEIsa0NBQ2M7O0lBRWQscUNBQ2lCOztJQUVqQixxQ0FDZ0Q7O0lBRWhELGtDQUFLOztJQUNMLDBDQUFrQzs7SUFDbEMsMkNBQW1DOztJQUluQyxvQ0FBd0I7Ozs7O0lBRlosK0JBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25yLWNoZWNrYm94JyxcbiAgLy8gdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5wdWcnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuci1jaGVja2JveFwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgPGRpdiBbbmdDbGFzc109XCJ7J2xhYmVsJzogdHJ1ZSwgJ2Rpc2FibGVkJzogZGlzYWJsZWQsICdpcy1jaGVja2VkJzogY2hlY2tlZH1cIj57e2xhYmVsfX08L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgQElucHV0KClcbiAgbGFiZWw6IHN0cmluZyA9ICcnXG5cbiAgQElucHV0KClcbiAgdmFsdWU6IGJvb2xlYW5cblxuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhblxuXG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBtb2RlbFxuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZFxuICAgIHRoaXMudXBkYXRlTW9kZWwoKVxuICB9XG5cbiAgdXBkYXRlTW9kZWwoKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzLm1vZGVsKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmFkZFZhbHVlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoKVxuICAgICAgfVxuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMubW9kZWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLmNoZWNrZWQpXG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWQpXG4gIH1cblxuICBhZGRWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1vZGVsID0gWy4uLnRoaXMubW9kZWwsIHRoaXMudmFsdWVdXG4gICAgfVxuICB9XG4gIHJlbW92ZVZhbHVlKCkge1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubW9kZWwgPSB0aGlzLm1vZGVsLmZpbHRlcih2ID0+IHYgIT09IHRoaXMudmFsdWUpXG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcy5tb2RlbCkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5tb2RlbC5pbmRleE9mKHRoaXMudmFsdWUpID4gLTFcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5tb2RlbFxuICAgIH1cbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpXG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbikge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuXG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm5cbiAgfVxuXG59XG4iXX0=