import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMatrielModule } from '../angular-matriel/angular-matriel.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMatrielModule
  ],
  exports:[AngularMatrielModule]
})
export class SharedModule { }
