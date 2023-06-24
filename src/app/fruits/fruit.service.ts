import { Injectable } from '@angular/core';
import {delay, Observable, of, toArray} from "rxjs";
import {SelectItem} from "../../model/select-item.model";

@Injectable()
export class FruitService {

  constructor() { }

  fetchFruits(): Observable<Array<SelectItem>> {
    return of(
      {key: 'orange', value: 'Orange'},
      {key: 'mango', value: 'Mango'},
      {key: 'banana', value: 'Banana'},
      {key: 'pineapple', value: 'Pineapple'},
    ).pipe(
      delay(3500),
      toArray()
    );
  }
}
