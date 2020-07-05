import { Component } from '@angular/core';

@Component({
  selector : 'pro-search',
  templateUrl : './search.component.html',
  styleUrls : ['./search.component.css']
})

export class SearchComponent
{
  constructor(){
  console.log("search component is loaded");
}
}