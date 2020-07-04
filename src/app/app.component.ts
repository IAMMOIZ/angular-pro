import { Component } from '@angular/core';

@Component({
	selector : 'pro-app',
	templateUrl : './app.component.html',
	styleUrls : ['./app.component.css']
})

export class AppComponent{
	constructor()
	{
		console.log("app component is rendering");
	}
}