//importing neccessory node modules
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
//import components
import { MainResourceComponent } from './mainresource/mainresource.component';
import { SearchResourceComponent } from './searchresource/searchresource.component';
import { CreateResourceComponent } from './createresource/createresource.component';

@NgModule({
	imports : [],
	declarations : [ MainResourceComponent , SearchResourceComponent , CreateResourceComponent],
	provoiders : [],
	exports : [],
})

export class ResourceModule{
constructor()
{
console.log("resource module is loaded");
}
}