import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TitleHeaderComponent } from './guiComponents/title-header/title-header.component';
import { HamburgerComponent } from './guiComponents/hamburger/hamburger.component';
import { MainMenuComponent } from './guiComponents/main-menu/main-menu.component';
import { TabComponent } from './guiComponents/tab/tab.component';
import { TabsComponent } from './guiComponents/tabs/tabs.component';
import { ScriptComponent } from './guiComponents/projectLab/script/script.component';
import { TestdataComponent } from './guiComponents/projectLab/testdata/testdata.component';
import { AutomationscriptComponent } from './guiComponents/projectLab/automationscript/automationscript.component';
import { AddparamsComponent } from './guiComponents/projectLab/automationscript/addparams/addparams.component';
import { QueryparamsComponent } from './guiComponents/projectLab/automationscript/queryparams/queryparams.component';
import { QueryparamsheaderComponent } from './guiComponents/projectLab/automationscript/queryparamsheader/queryparamsheader.component';


@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    HomeComponent,
    TitleHeaderComponent,
    HamburgerComponent,
    MainMenuComponent,
    TabComponent,
    TabsComponent,
    ScriptComponent,
    TestdataComponent,
    AutomationscriptComponent,
    AddparamsComponent,
    QueryparamsComponent,
    QueryparamsheaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [QueryparamsheaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
