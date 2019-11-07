/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(cd) {
        this.cd = cd;
        this.label = '';
        this.onChange = new EventEmitter();
        this.onModelChange = (/**
         * @return {?}
         */
        function () { });
        this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
        this.checked = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.updateModel();
    };
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.updateModel = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.addValue = /**
     * @return {?}
     */
    function () {
        if (this.value !== undefined) {
            this.model = tslib_1.__spread(this.model, [this.value]);
        }
    };
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.removeValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.value !== undefined) {
            this.model = this.model.filter((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return v !== _this.value; }));
        }
    };
    /**
     * @param {?} model
     * @return {?}
     */
    CheckboxComponent.prototype.writeValue = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
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
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nr-checkbox',
                    // templateUrl: './checkbox.component.pug',
                    template: "\n<div class=\"nr-checkbox\" (click)=\"onClick($event)\">\n  <div [ngClass]=\"{'label': true, 'disabled': disabled, 'is-checked': checked}\">{{label}}</div>\n</div>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CheckboxComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    CheckboxComponent.propDecorators = {
        label: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        onChange: [{ type: Output }]
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLW5pZXIvY2hlY2tib3gvIiwic291cmNlcyI6WyJsaWIvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFO0lBbUNFLDJCQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQWZ6QyxVQUFLLEdBQVcsRUFBRSxDQUFBO1FBU2xCLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUdoRCxrQkFBYTs7O1FBQWEsY0FBTyxDQUFDLEVBQUE7UUFDbEMsbUJBQWM7OztRQUFhLGNBQU8sQ0FBQyxFQUFBO1FBSW5DLFlBQU8sR0FBWSxLQUFLLENBQUE7SUFGb0IsQ0FBQzs7Ozs7SUFJN0MsbUNBQU87Ozs7SUFBUCxVQUFRLEtBQUs7UUFDWCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU07U0FDUDtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO1FBQzVCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNwQixDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixFQUFFO1lBQ25FLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO2FBQ2hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTthQUNuQjtZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQy9CO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNqQztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNsQyxDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxvQkFBTyxJQUFJLENBQUMsS0FBSyxHQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQTtTQUN6QztJQUNILENBQUM7Ozs7SUFDRCx1Q0FBVzs7O0lBQVg7UUFBQSxpQkFJQztRQUhDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxLQUFJLENBQUMsS0FBSyxFQUFoQixDQUFnQixFQUFDLENBQUE7U0FDdEQ7SUFDSCxDQUFDOzs7OztJQUVELHNDQUFVOzs7O0lBQVYsVUFBVyxLQUFLO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixFQUFFO1lBQ25FLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2FBQ25EO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtTQUMxQjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBWTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQTtJQUN6QixDQUFDOzs7OztJQUVELDZDQUFpQjs7OztJQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFBO0lBQzFCLENBQUM7O2dCQTVGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7O29CQUV2QixRQUFRLEVBQUUsd0tBSVg7b0JBRUMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixFQUFDOzRCQUNoRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7OztnQkFuQmdELGlCQUFpQjs7O3dCQXNCL0QsS0FBSzt3QkFHTCxLQUFLOzJCQUdMLEtBQUs7MkJBR0wsTUFBTTs7SUFrRVQsd0JBQUM7Q0FBQSxBQTlGRCxJQThGQztTQTdFWSxpQkFBaUI7OztJQUU1QixrQ0FDa0I7O0lBRWxCLGtDQUNjOztJQUVkLHFDQUNpQjs7SUFFakIscUNBQ2dEOztJQUVoRCxrQ0FBSzs7SUFDTCwwQ0FBa0M7O0lBQ2xDLDJDQUFtQzs7SUFJbkMsb0NBQXdCOzs7OztJQUZaLCtCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduci1jaGVja2JveCcsXG4gIC8vIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQucHVnJyxcbiAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJuci1jaGVja2JveFwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgPGRpdiBbbmdDbGFzc109XCJ7J2xhYmVsJzogdHJ1ZSwgJ2Rpc2FibGVkJzogZGlzYWJsZWQsICdpcy1jaGVja2VkJzogY2hlY2tlZH1cIj57e2xhYmVsfX08L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDaGVja2JveENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBASW5wdXQoKVxuICBsYWJlbDogc3RyaW5nID0gJydcblxuICBASW5wdXQoKVxuICB2YWx1ZTogYm9vbGVhblxuXG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuXG5cbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIG1vZGVsXG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge31cbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge31cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBjaGVja2VkOiBib29sZWFuID0gZmFsc2VcblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkXG4gICAgdGhpcy51cGRhdGVNb2RlbCgpXG4gIH1cblxuICB1cGRhdGVNb2RlbCgpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMubW9kZWwpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuYWRkVmFsdWUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZSgpXG4gICAgICB9XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMuY2hlY2tlZClcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZClcbiAgfVxuXG4gIGFkZFZhbHVlKCkge1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubW9kZWwgPSBbLi4udGhpcy5tb2RlbCwgdGhpcy52YWx1ZV1cbiAgICB9XG4gIH1cbiAgcmVtb3ZlVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5tb2RlbCA9IHRoaXMubW9kZWwuZmlsdGVyKHYgPT4gdiAhPT0gdGhpcy52YWx1ZSlcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzLm1vZGVsKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLm1vZGVsLmluZGV4T2YodGhpcy52YWx1ZSkgPiAtMVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLm1vZGVsXG4gICAgfVxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKClcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm5cbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbikge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmblxuICB9XG5cbn1cbiJdfQ==