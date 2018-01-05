import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Http, Headers, HttpModule, Response } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TitleHeaderComponent } from './guiComponents/title-header/title-header.component';
import { HamburgerComponent } from './guiComponents/hamburger/hamburger.component';
import { MainMenuComponent } from './guiComponents/main-menu/main-menu.component';
import { UserDataComponent } from './user-data/user-data.component';
import { DisplayUserDetailsComponent } from './display-user-details/display-user-details.component';
import {ReadJSON} from './utils/readJson';
import { APP_ROUTES_PROVIDER } from './routes';
import { NameComponent } from './name/name.component';
import { EmailComponent } from './email/email.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TitleHeaderComponent,
    HamburgerComponent,
    MainMenuComponent,
    UserDataComponent,
    DisplayUserDetailsComponent,
    NameComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [],
  entryComponents: [
    NameComponent,
    EmailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
