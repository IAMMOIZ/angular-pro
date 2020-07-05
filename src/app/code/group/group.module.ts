//importing neccessory node modules
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//import components
import { MainGroupComponent } from './maingroup/maingroup.component';
import { CreateGroupComponent } from './creategroup/creategroup.component';
import { SearchGroupComponent } from './searchgroup/searchgroup.component';
@NgModule({
	imports : [],
	declarations : [CreateGroupComponent , MainGroupComponent , SearchGroupComponent],
	provoiders : [],
	exports : [],
})

export class GroupModule{
constructor()
{
console.log("group module is loaded");
}
}