import {Component, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {SelectItem} from "../../model/select-item.model";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-base-select',
  templateUrl: './base-select.component.html',
  styleUrls: ['./base-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BaseSelectComponent,
      multi: true,
    }
  ]
})
export class BaseSelectComponent implements ControlValueAccessor, OnInit, OnDestroy {

  value?: string;
  onTouched = () => {
  };
  onChange = (value: string) => {
  };

  isDisabled = false;
  isLoading = false;
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

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: any): void {
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

}
