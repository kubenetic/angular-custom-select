import {Component, OnInit} from '@angular/core';
import {FruitService} from "./fruit.service";
import {BaseSelectComponent} from "../base-select/base-select.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-fruits',
  templateUrl: '../base-select/base-select.component.html',
  styleUrls: ['../base-select/base-select.component.scss'],
  providers: [
    {provide: FruitService},
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FruitsComponent,
      multi: true,
    }
  ]
})
export class FruitsComponent extends BaseSelectComponent implements OnInit {

  override label: string = 'Fruits';

  constructor(private fruitService: FruitService) {
    super();
  }

  override ngOnInit() {
    this.dataInitializerFn = this.fruitService.fetchFruits;

    super.ngOnInit();
  }
}
