import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, forwardRef, ChangeDetectorRef, Input, Output, NgModule } from '@angular/core';
import { __spread } from 'tslib';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxService = /** @class */ (function () {
    function CheckboxService() {
    }
    CheckboxService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CheckboxService.ctorParameters = function () { return []; };
    /** @nocollapse */ CheckboxService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckboxService_Factory() { return new CheckboxService(); }, token: CheckboxService, providedIn: "root" });
    return CheckboxService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            this.model = __spread(this.model, [this.value]);
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
var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
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
    return CheckboxModule;
}());

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
