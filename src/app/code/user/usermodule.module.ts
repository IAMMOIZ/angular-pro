import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
// import { RouterModule , Routes } from '@angular/router';
// import { MainusercomponentComponent } from './mainusercomponent/mainusercomponent.component';
import { UsermoduleRoutingModule } from './usermodule.router';
const routes : Routes = [{path : '' , component : MainUserComponentComponent }]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsermoduleRoutingModule
    ]

})
export class UsermoduleModule
{
  constructor(){
    console.log("user module is rendering");
  }
}