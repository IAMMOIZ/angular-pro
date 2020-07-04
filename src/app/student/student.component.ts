import { Component } from '@angular/core';

@Component({
	selector : 'pro-student',
	templateUrl : './student.component.html',
	styleUrls : ['./student.component.css']
})

export class StudentComponent
{
constructor()
{
console.log("student component is rendering");
}
}