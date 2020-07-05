import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';

export const routes = [ {path : '' , component : SearchComponent}];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class SearchRoutingModule
{
  constructor()
  {
    console.log("search routing module");
  }
}