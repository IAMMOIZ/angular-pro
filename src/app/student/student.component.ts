import {Component } from "@angular/core";

@Component({
  selector : "student",
  templateUrl : "./student.component.html",
  styleUrls : ['./stuudent.component.css']
})

export class studentcomponent
{
  constructor()
  {
    console.log("student component is rendered");
  }
}