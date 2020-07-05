import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainusercomponentComponent } from './mainusercomponent/mainusercomponent.component';
const routes: Routes = [
  {
    path: '',
    component: MainusercomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermoduleRoutingModule {}
