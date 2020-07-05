import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
// import features routing information
import { SearchRoutingModule } from './search-routing.module';
// import component
import { SearchComponent } from './search/search.component';

@NgModule({
  imports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchRoutingModule
  ],
  declarations : [
    SearchComponent
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

