import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';
import { MainUserComponet } from './mainuser/mainuser.component'
const routes : Routes = [{path : '' , component : MainUserComponent }]
@NgModule({
declarations : [ MainUserComponent],
  imports : [ FormsModule, ReactiveFormsModule , RouterModule.forChild(routes)],
exports : [ MainUserComponent]
})