import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mod3',
  templateUrl: './mod3.component.html',
  styleUrls: ['./mod3.component.css'],
})
export class Mod3Component implements OnInit {
  formreacitve2: FormGroup;
  constructor(fb: FormBuilder) {
    this.formreacitve2 = fb.group({
      name: fb.control(''),
      phones: fb.array([
        fb.control('+79004448883'),
        fb.control('+79004448883'),
        fb.control('+79004448888'),
        fb.control('+79004448878'),
      ]),
      age: fb.control(null),
      email: fb.control('sergey@mail.ru'),
      date: fb.control(''),
    });
    this.date.valueChanges.subscribe((date) => {
      const age = new Date().getFullYear() - new Date(date).getFullYear();
      this.age.setValue(age)
    });
  }

  ngOnInit(): void {}

  get age(): FormControl {
    return this.formreacitve2.get('age') as FormControl;
  }

  get date(): FormControl {
    return this.formreacitve2.get('date') as FormControl;
  }
  get phones(): FormArray {
    return this.formreacitve2.get('phones') as FormArray;
  }
}
