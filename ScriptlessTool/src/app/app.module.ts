import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TitleHeaderComponent } from './guiComponents/title-header/title-header.component';
import { HamburgerComponent } from './guiComponents/hamburger/hamburger.component';
import { MainMenuComponent } from './guiComponents/main-menu/main-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    HomeComponent,
    TitleHeaderComponent,
    HamburgerComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
