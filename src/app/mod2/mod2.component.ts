import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mod2',
  templateUrl: './mod2.component.html',
  styleUrls: ['./mod2.component.css']
})
export class Mod2Component implements OnInit {
 formreacitve1: FormGroup;
  constructor(private fb:FormBuilder) {
    this.formreacitve1 = fb.group({
      name: fb.control(''),
      lastName: fb.control(''),
      patronymic: fb.control(''),
      date: fb.control(''),
      emails: fb.array([])
    })
   }

  ngOnInit(): void {
  }
  onChange(event) {
    console.log(event.target.value)
  }
  get emails(): FormArray  {
    return this.formreacitve1.get('emails') as FormArray;
  }
  addEmail() {
    this.emails.push(this.fb.control('@mail.ru'));
  }
}
