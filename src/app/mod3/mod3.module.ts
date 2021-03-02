import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod3Component } from './mod3.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [Mod3Component],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [Mod3Component]
})
export class Mod3Module { }
