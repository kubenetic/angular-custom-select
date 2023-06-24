import { Injectable } from '@angular/core';
import {delay, Observable, of, toArray} from "rxjs";
import {SelectItem} from "../../model/select-item.model";

@Injectable()
export class AnimalService {

  constructor() { }

  fetchAnimals(): Observable<Array<SelectItem>> {
    return of(
      {key: 'tiger', value: 'Tiger'},
      {key: 'monkey', value: 'Monkey'},
      {key: 'elephant', value: 'Elephant'},
      {key: 'lion', value: 'Lion'},
    ).pipe(
      delay(2500),
      toArray()
    );
  }
}
