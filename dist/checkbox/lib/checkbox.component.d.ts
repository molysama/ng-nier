import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class CheckboxComponent implements ControlValueAccessor {
    private cd;
    label: string;
    value: boolean;
    disabled: boolean;
    onChange: EventEmitter<any>;
    model: any;
    onModelChange: Function;
    onModelTouched: Function;
    constructor(cd: ChangeDetectorRef);
    checked: boolean;
    onClick(event: any): void;
    updateModel(): void;
    addValue(): void;
    removeValue(): void;
    writeValue(model: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
}
