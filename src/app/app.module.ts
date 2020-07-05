//importing neccesory modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
//import components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
	imports : [ BrowserModule , FormsModule , RouterModule.forRoot(routes) ],
	declarations : [ AppComponent , HeaderComponent ,HomeComponent , StudentComponent],
	bootstrap : [ AppComponent ]
})

export class AppModule
{
	constructor()
	{
	console.log("AppModule is loaded");
	}
}