import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComponentFactoryResolver, Type, ViewChild,ViewContainerRef } from '@angular/core';
import { AddparamsComponent }from './addparams/addparams.component';

@Component({
  selector: 'app-automationscript',
  templateUrl: './automationscript.component.html',
  styleUrls: ['./automationscript.component.css']
})
export class AutomationscriptComponent implements OnInit {

  @Output() selectedParam = new EventEmitter<string>();
  @Output() selectedStep = new EventEmitter<string>();

  params = [
    {value:'Add Params'},
    {value:'Header Params'},
    {value:'Query Params'},
    {value:'Path Params'}
  ];

  steps = [
    {value:'Add Steps'},
    {value:'Get Method'},
    {value:'Post Method'},
    {value:'Delete Method'}
  ];

  selectedParamValue: any;
  selectedStepValue: any;

  @ViewChild('paramscontainer', {read: ViewContainerRef}) paramscontainer: ViewContainerRef;
  @ViewChild('stepscontainer', {read: ViewContainerRef}) stepscontainer: ViewContainerRef;

  paramComponents = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  addParamControls(e: Event, paramdropdownvalue: string){
      var selectedVal = this.params[parseInt(paramdropdownvalue.substring(0,1))].value;
      this.selectedParam.emit(paramdropdownvalue)
      var componentFactory: any = undefined;
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(AddparamsComponent);
      const component = this.paramscontainer.createComponent(componentFactory);
      this.paramComponents.push(component);

      return true;
  }

  resetParamDropDownValue(){
    this.selectedParamValue = this.params[0];
  }

  addStepControls(e: Event, stepdropdownvalue: string){
      var selectedVal = this.params[parseInt(stepdropdownvalue.substring(0,1))].value;
      this.selectedStep.emit(stepdropdownvalue)
      var componentFactory: any = undefined;
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(AddparamsComponent);
      const component = this.stepscontainer.createComponent(componentFactory);
      this.paramComponents.push(component);

      return true;
  }

  resetStepDropDownValue(){
    this.selectedStepValue = this.steps[0];
  }
}
