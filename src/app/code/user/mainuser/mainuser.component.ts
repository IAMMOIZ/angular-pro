import {Component} from '@angular/core';

@Component({
  selector : 'pro-user',
  templateUrl : './mainuser.component.html',
  styleUrls : ['./mainuser.component.css']
})

export class MainUserComponent
{
  constructor()
  {
    console.log('user component is rendering');
  }
}