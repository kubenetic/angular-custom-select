import {Component, Input} from '@angular/core';
import {ControlValueAccessor} from "@angular/forms";
import {SelectItem} from "../../model/select-item.model";

@Component({
  selector: 'app-base-select',
  templateUrl: './base-select.component.html',
  styleUrls: ['./base-select.component.scss']
})
export class BaseSelectComponent implements ControlValueAccessor {

  value?: string;
  onTouched = () => {};
  onChange = (value: string) => {};
  isDisabled = false;

  @Input() isLoading = false;
  @Input() label?: string;
  @Input() options!: Array<SelectItem>;
  @Input() hint?: string;
  @Input() error?: string;

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

}
