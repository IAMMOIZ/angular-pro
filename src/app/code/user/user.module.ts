import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports : [ FormsModule, ReactiveFormsModule , RouterModule.forChild()]
})