import {Component, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {SelectItem} from "../../model/select-item.model";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-base-select',
  templateUrl: './base-select.component.html',
  styleUrls: ['./base-select.component.scss']
})
export class BaseSelectComponent implements ControlValueAccessor, OnInit, OnDestroy {

  value?: string;
  onTouched = () => {
  };
  onChange = (value: string) => {
  };

  isDisabled = true;
  isLoading = false;
  touched = false;

  label?: string;
  multiple = false;
  options!: Array<SelectItem>;
  hint?: string;
  error?: string;

  dataInitializerFn!: () => Observable<Array<SelectItem>>;
  dataSubscription?: Subscription;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  ngOnInit(): void {
    const _this = this;

    this.isLoading = true;
    this.isDisabled = true;
    this.dataSubscription = this.dataInitializerFn().subscribe({
      next(values: Array<SelectItem>) {
        _this.options = values;
        _this.isLoading = false;
        _this.isDisabled = false;
      },
      error(err) {
        _this.error = err.error;
        _this.isLoading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }

  onValueChange(value: string) {
    this.onChange(value);
  }
}
