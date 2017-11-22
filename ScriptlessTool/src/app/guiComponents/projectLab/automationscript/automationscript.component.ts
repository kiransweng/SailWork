import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComponentFactoryResolver, Type, ViewChild,ViewContainerRef } from '@angular/core';
import { AddparamsComponent } from './addparams/addparams.component';

@Component({
  selector: 'app-automationscript',
  templateUrl: './automationscript.component.html',
  styleUrls: ['./automationscript.component.css']
})
export class AutomationscriptComponent implements OnInit {

  @Output() selectedParam = new EventEmitter<string>();

  params = [
    {value:'Add Params'},
    {value:'Header Params'},
    {value:'Query Params'},
    {value:'Path Params'}
  ];

  selectedParamValue: any;

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  components = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  addParamControls(e: Event, paramdropdownvalue: string){
      var selectedVal = this.params[parseInt(paramdropdownvalue.substring(0,1))].value;

      this.selectedParam.emit(paramdropdownvalue)

      var componentFactory: any = undefined;
      // if(selectedVal === 'Header Params'){
      //   componentFactory = this.componentFactoryResolver.resolveComponentFactory(AddparamsComponent);
      // }else{
      //   return false;
      // }

      componentFactory = this.componentFactoryResolver.resolveComponentFactory(AddparamsComponent);

      const component = this.container.createComponent(componentFactory);
      this.components.push(component);

      return true;
  }

  resetParamDropDownValue(){
    this.selectedParamValue = this.params[0];
  }



}
