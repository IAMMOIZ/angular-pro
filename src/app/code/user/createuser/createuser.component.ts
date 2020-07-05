import { Component } from '@angular/core';

@Component({
selector : 'pro-createuser',
templateUrl : './createuser.component.html',
styleUrls : ['./createuser.component.css']
})

export class CreateUserComponent
{
constructor()
{
console.log("create user component is loaded");
}
}