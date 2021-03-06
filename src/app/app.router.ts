//import Routes datatype
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { studentcomponent } from './student/student.component';

// import components 
//import { HomeComponent } from './home/mainhome/home.component';
//import { SearchComponent } from './code/search/mainsearch/searchcomponent.component';
//import { UserComponent } from './code/user/mainuser/usercomponent.component';
//import { GroupComponent } from './code/group/maingroup/groupcomponent.component';
//import { ResourceComponent } from './code/resource/mainresource/resourcecomponent.component';
//import { SchemaComponent } from './code/schema/mainschema/schemacomponent.component';

//import features modules
// import { UserModule } from './code/user/user.module';
// import { GroupModule } from './code/group/group.module';
// import { ResourceModule } from './code/resource/resource.module';
// import { SchemaModule } from './code/schema/schema.module';
// import { SharedModifyModule } from './code/modify/sharedmodify.module';


//routes for components. for feature modules component property will be used.
// export const routes : Routes = [
// // { path : '' , component : AppComponent },
// { path : 'home' , component : HomeComponent },
// { path : 'search', component : SearchComponent },
// { path : 'user' , component : UserComponent },
// { path : 'group' , component : GroupComponent },
// { path : 'resourcemanagement' , component : ResourceComponent },
// { path : 'schemamanagement' , component : SchemaComponent },
// ]


// //routes for modules . for feature modules loadChildren property will be used.
// export const routes : Routes = [
// { path : '', component : HomeComponent },
// { path : 'search', loadChildren : './code/search/search.module#SearchModule' },
// { path : 'user' , loadChildren : './code/user/user.module#UserModule' },
// { path : 'group' , loadChildren : './code/group/group.module#GroupModule' },
// { path : 'resourcemanagement' , loadChildren : './code/resource/resource.module#ResourceModule' },
// { path : 'schemamanagement' , loadChildren : './code/schema/schema.module#SchemaModule' },
// ]


export const routes : Routes = [
  {
    path:'/student',
    component : studentcomponent
  }
  {
    path : "./studentdetails",
    component : studentdetailscomponent
  }
]