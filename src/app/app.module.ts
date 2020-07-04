//importing neccesory modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
//import components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component'
import { Routes } from '@angular/router';

// const routes = [
// { path : 'home' , component : HomeComponent},
// { path : 'student' , component : StudentComponent}
// ]

@NgModule({
	imports : [ BrowserModule , FormsModule  ],
	declarations : [ AppComponent , HomeComponent , StudentComponent],
	bootstrap : [ AppComponent ]
})

export class AppModule
{
	constructor()
	{
	console.log("AppModule is loaded");
	}
}