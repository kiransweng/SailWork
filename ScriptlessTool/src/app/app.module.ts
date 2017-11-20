import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TitleHeaderComponent } from './guiComponents/title-header/title-header.component';
import { HamburgerComponent } from './guiComponents/hamburger/hamburger.component';
import { MainMenuComponent } from './guiComponents/main-menu/main-menu.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { APP_ROUTES_PROVIDER } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TitleHeaderComponent,
    HamburgerComponent,
    MainMenuComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
