import { Component } from '@angular/core';

@Component({
  selector : 'pro-header',
  templateUrl : './header.component.html',
  styleUrls : ['./header.component.css']
})

export class HeaderComponent
{
  constructor()
  {
    console.log("header component is rendering");
  }
}