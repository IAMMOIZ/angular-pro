import { Component ,  OnInit } from '@angular/core';

@Component(
{
	selector : 'pro-home',
	templateUrl : './home.component.html',
	styleUrls : ['./home.component.css']

})

export class HomeComponent 
{
constructor()
{
console.log("home component is rendering");
}

}