import {Component, OnInit} from '@angular/core';
import {FruitService} from "./fruit.service";
import {BaseSelectComponent} from "../base-select/base-select.component";

@Component({
  selector: 'app-fruits',
  templateUrl: '../base-select/base-select.component.html',
  styleUrls: ['../base-select/base-select.component.scss'],
  providers: [
    {
      provide: FruitService
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
