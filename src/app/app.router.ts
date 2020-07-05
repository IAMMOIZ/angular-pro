//import Routes datatype
import { Routes } from '@angular/router';
// import components and features modules
import { HomeComponent } from './home/home.component';
import { searchModule } from './code/search/search.module';




export const routes : Routes = [
// { path : '' , component : AppComponent},
{ path : 'home' , component : HomeComponent},
{ path : 'search' , loadChildren : }
]