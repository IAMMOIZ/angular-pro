//import Routes datatype
import { Routes } from '@angular/router';
// import components and features modules
import { HomeComponent } from './home/home.component';
import { SearchModule } from './code/search/search.module';
import { UserModule } from './code/user/user.module';


export const routes : Routes = [
// { path : '' , component : AppComponent},
{ path : 'home' , component : HomeComponent},
{ path : 'search' , loadChildren : './code/search/search.module#SearchModule'},
{ path : 'user' , loadChildren : './code/user/user.module#UserModule'}
]