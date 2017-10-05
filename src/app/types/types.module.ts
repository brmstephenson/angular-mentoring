import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeListComponent } from './type-list/type-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TypeListComponent
  ],
  exports: [
    TypeListComponent
  ]
})
export class TypesModule { }
