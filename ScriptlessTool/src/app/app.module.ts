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
import { AddparamsComponent } from './guiComponents/projectLab/automationscript/params/addparams/addparams.component';
import { QueryparamsComponent } from './guiComponents/projectLab/automationscript/params/queryparams/queryparams.component';
import { QueryparamsheaderComponent } from './guiComponents/projectLab/automationscript/params/queryparamsheader/queryparamsheader.component';
import { HeaderparamsheaderComponent } from './guiComponents/projectLab/automationscript/params/headerparamsheader/headerparamsheader.component';
import { HeaderparamsComponent } from './guiComponents/projectLab/automationscript/params/headerparams/headerparams.component';
import { PathparamsheaderComponent } from './guiComponents/projectLab/automationscript/params/pathparamsheader/pathparamsheader.component';
import { PathparamsComponent } from './guiComponents/projectLab/automationscript/params/pathparams/pathparams.component';
import { AddstepsComponent } from './guiComponents/projectLab/automationscript/steps/addsteps/addsteps.component';
import { GetmethodComponent } from './guiComponents/projectLab/automationscript/steps/getmethod/getmethod.component';


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
    QueryparamsheaderComponent,
    HeaderparamsheaderComponent,
    HeaderparamsComponent,
    PathparamsheaderComponent,
    PathparamsComponent,
    AddstepsComponent,
    GetmethodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    QueryparamsComponent,
    HeaderparamsComponent,
    PathparamsComponent,
    GetmethodComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
