import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { RouterModule } from '@angular/router';
import { MyMaterialModule } from './../material-module';

@NgModule({
  declarations: [BookComponent],
  imports: [
    MyMaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookComponent
      }
    ]),
    CommonModule
  ]
})
export class BookModule { }
