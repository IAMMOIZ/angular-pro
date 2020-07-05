//import required node dependencies

import { Component } from '@angular/core';

@Component({
selector : 'pro-maingroup',
templateUrl : './maingroup.component.html',
styleUrls : './maingroup.compnent.css'
})

export class MainGroupComponent
{
constructor()
{
console.log("main group component is rendering ");
}
}