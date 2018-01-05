import { Routes, RouterModule } from "@angular/router";
import {UserDataComponent} from './user-data/user-data.component';
import {DisplayUserDetailsComponent} from './display-user-details/display-user-details.component';

const APP_ROUTES: Routes = [
  {path:'', component: UserDataComponent},
  {path:'userDetails', component:DisplayUserDetailsComponent}
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES)
