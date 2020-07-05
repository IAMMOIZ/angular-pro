import { Component } from '@angular/core';

@Component({
selector : 'pro-mainuser',
templateUrl : './mainuser.component.html',
styleUrls : ['./mainuser.component.css']
})

export class MainUserComponent
{
constructor()
{
console.log("main user component is loaded");
}
}