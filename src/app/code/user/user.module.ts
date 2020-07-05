//importing neccessory node modules
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
//import components
import { MainUserComponent } from './mainuser/mainuser.component';
import { SearchUserComponent } from './searchuser/searchuser.component';
import { CreateUserComponent } from './createuser/createuser.component';
@NgModule({
	imports : [],
	declarations : [ MainUserComponent , SearchUserComponent , CreateUserComponent],
	provoiders : [],
	exports : [],
})

export class UserModule{
constructor()
{
console.log("user module is loaded");
}
}