import {Component, OnInit} from '@angular/core';
import {BaseSelectComponent} from "../base-select/base-select.component";
import {AnimalService} from "./animal.service";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-animals',
  templateUrl: '../base-select/base-select.component.html',
  styleUrls: ['../base-select/base-select.component.scss'],
  providers: [
    {provide: AnimalService},
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AnimalsComponent,
      multi: true,
    }
  ]
})
export class AnimalsComponent extends BaseSelectComponent implements OnInit {

  override label: string = 'Animals';

  constructor(private animalService: AnimalService) {
    super();
  }

  override ngOnInit() {
    this.dataInitializerFn = this.animalService.fetchAnimals;

    super.ngOnInit();
  }
}
