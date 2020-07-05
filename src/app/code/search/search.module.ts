import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
// import component
import { SearchComponent } from './search-form/search.component';

@NgModule({
  imports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    SearchComponent
  ]
})

export class SearchModule
{
  constructor()
  {
    console.log("search module is loaded");
  }
}

