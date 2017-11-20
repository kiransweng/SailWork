import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES: Routes = [
  {path:'admin-login', component:AdminLoginComponent},
  {path:'login', component: LoginComponent}
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES)
