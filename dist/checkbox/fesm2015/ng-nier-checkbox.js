import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, forwardRef, ChangeDetectorRef, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxService {
    constructor() { }
}
CheckboxService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CheckboxService.ctorParameters = () => [];
/** @nocollapse */ CheckboxService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckboxService_Factory() { return new CheckboxService(); }, token: CheckboxService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxModule {
}
CheckboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CheckboxComponent],
                imports: [
                    CommonModule
                ],
                exports: [CheckboxComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CheckboxComponent, CheckboxModule, CheckboxService };
//# sourceMappingURL=ng-nier-checkbox.js.map
