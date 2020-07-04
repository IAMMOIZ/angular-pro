import { Component } from '@angular/core';

@Component({
	selector : 'pro-student',
	template : `<h1>this is student component</h1>`,
	styles : [`h1{color:blue}`]
})

export class StudentComponent
{
constructor()
{
console.log("student component is rendering");
}
}