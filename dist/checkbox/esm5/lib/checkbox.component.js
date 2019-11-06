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
                    template: "<div class=\"nr-checkbox\" (click)=\"onClick($event)\">\n  <div [ngClass]=\"{'label': true, 'disabled': disabled, 'is-checked': checked}\">{{label}}</div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLW5pZXIvY2hlY2tib3gvIiwic291cmNlcyI6WyJsaWIvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFO0lBaUNFLDJCQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQWZ6QyxVQUFLLEdBQVcsRUFBRSxDQUFBO1FBU2xCLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUdoRCxrQkFBYTs7O1FBQWEsY0FBTyxDQUFDLEVBQUE7UUFDbEMsbUJBQWM7OztRQUFhLGNBQU8sQ0FBQyxFQUFBO1FBSW5DLFlBQU8sR0FBWSxLQUFLLENBQUE7SUFGb0IsQ0FBQzs7Ozs7SUFJN0MsbUNBQU87Ozs7SUFBUCxVQUFRLEtBQUs7UUFDWCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU07U0FDUDtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO1FBQzVCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNwQixDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixFQUFFO1lBQ25FLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO2FBQ2hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTthQUNuQjtZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQy9CO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNqQztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNsQyxDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxvQkFBTyxJQUFJLENBQUMsS0FBSyxHQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQTtTQUN6QztJQUNILENBQUM7Ozs7SUFDRCx1Q0FBVzs7O0lBQVg7UUFBQSxpQkFJQztRQUhDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxLQUFJLENBQUMsS0FBSyxFQUFoQixDQUFnQixFQUFDLENBQUE7U0FDdEQ7SUFDSCxDQUFDOzs7OztJQUVELHNDQUFVOzs7O0lBQVYsVUFBVyxLQUFLO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixFQUFFO1lBQ25FLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2FBQ25EO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtTQUMxQjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBWTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQTtJQUN6QixDQUFDOzs7OztJQUVELDZDQUFpQjs7OztJQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFBO0lBQzFCLENBQUM7O2dCQTFGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7O29CQUV2QixRQUFRLEVBQUUsb0tBRUw7b0JBRUwsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixFQUFDOzRCQUNoRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7OztnQkFqQmdELGlCQUFpQjs7O3dCQW9CL0QsS0FBSzt3QkFHTCxLQUFLOzJCQUdMLEtBQUs7MkJBR0wsTUFBTTs7SUFrRVQsd0JBQUM7Q0FBQSxBQTVGRCxJQTRGQztTQTdFWSxpQkFBaUI7OztJQUU1QixrQ0FDa0I7O0lBRWxCLGtDQUNjOztJQUVkLHFDQUNpQjs7SUFFakIscUNBQ2dEOztJQUVoRCxrQ0FBSzs7SUFDTCwwQ0FBa0M7O0lBQ2xDLDJDQUFtQzs7SUFJbkMsb0NBQXdCOzs7OztJQUZaLCtCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduci1jaGVja2JveCcsXG4gIC8vIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQucHVnJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibnItY2hlY2tib3hcIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCI+XG4gIDxkaXYgW25nQ2xhc3NdPVwieydsYWJlbCc6IHRydWUsICdkaXNhYmxlZCc6IGRpc2FibGVkLCAnaXMtY2hlY2tlZCc6IGNoZWNrZWR9XCI+e3tsYWJlbH19PC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoZWNrYm94Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmcgPSAnJ1xuXG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBib29sZWFuXG5cbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW5cblxuICBAT3V0cHV0KClcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgbW9kZWxcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fVxuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWRcbiAgICB0aGlzLnVwZGF0ZU1vZGVsKClcbiAgfVxuXG4gIHVwZGF0ZU1vZGVsKCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcy5tb2RlbCkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5hZGRWYWx1ZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKClcbiAgICAgIH1cbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5jaGVja2VkKVxuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodGhpcy5jaGVja2VkKVxuICB9XG5cbiAgYWRkVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5tb2RlbCA9IFsuLi50aGlzLm1vZGVsLCB0aGlzLnZhbHVlXVxuICAgIH1cbiAgfVxuICByZW1vdmVWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1vZGVsID0gdGhpcy5tb2RlbC5maWx0ZXIodiA9PiB2ICE9PSB0aGlzLnZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMubW9kZWwpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMubW9kZWwuaW5kZXhPZih0aGlzLnZhbHVlKSA+IC0xXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMubW9kZWxcbiAgICB9XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmblxuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuXG4gIH1cblxufVxuIl19