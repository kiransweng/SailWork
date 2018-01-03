import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../../../guiComponents/tab/tab.component';
import { TabsComponent } from '../../../guiComponents/tabs/tabs.component';

@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.css']
})
export class ScriptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createScript():any{
      var flag = true;
      var scriptName;
      while(flag){
          scriptName = prompt("Enter script name:");

          if(scriptName == null || scriptName != ""){
            flag = false;
          }else{
            scriptName = scriptName.replace(/[^a-zA-Z0-9]/g, "");
          }
      }
  }
}
