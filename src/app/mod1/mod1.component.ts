import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements OnInit {
  name2 = 'anton';
  age = 25;
  formreacitve: FormGroup;
  constructor(fb:FormBuilder) {
    this.formreacitve = fb.group({
      name: fb.control('sergey'),
      lastName: fb.control('petrov'),
      age: fb.control(23)
    })
  }

  ngOnInit(): void {
  }

  onClick(event) {
    console.log(event.target.value)
  }

}
