import { Component ,  OnInit } from '@angular/core';

@Component(
{
	selector : 'pro-home',
	template : `<h1>hi bro</h1>`,
	styles : [`h1{color:red}`]

})

export class HomeComponent 
{
constructor()
{
console.log("home component is rendering");
}

}