import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  personalForm = this.formBuilder.group({
    name: [null, Validators.required],
    age: [null],
    animals: this.formBuilder.array([
      new FormControl('elephant')
    ]),
    fruits: this.formBuilder.array([])
  })

  constructor(private formBuilder: FormBuilder) {
  }

  get nameControl() {
    return this.personalForm.get('name') as FormControl;
  }

  get ageControl() {
    return this.personalForm.get('age') as FormControl;
  }

  get animalsArray() {
    return this.personalForm.get('animals') as FormArray;
  }

  get fruitsArray() {
    return this.personalForm.get('fruits') as FormArray;
  }

  addAnimal() {
    this.animalsArray.push(new FormControl(null));
  }

  addFruit() {
    this.fruitsArray.push(new FormControl(null));
  }

  onSubmit() {
    console.log('Your name: ' + this.nameControl.value);
    console.log('Your age:  ' + this.ageControl.value);
    console.log('Your favorite animals: ' + this.animalsArray.controls.map(control => control.value).join(', '));
    console.log('Your favorite fruits:  ' + this.fruitsArray.controls.map(control => control.value).join(', '));
  }
}
