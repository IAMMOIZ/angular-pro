//importing neccessory node modules
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
//import components
import { MainSearchComponent } from './mainsearch/mainsearch.component'; 


@NgModule({
	imports : [],
	declarations : [ MainSearchComponent ],
	provoiders : [],
	exports : [],
})

export class SearchModule{
constructor()
{
console.log("search module is loaded");
}
}