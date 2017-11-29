import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComponentFactoryResolver, Type, ViewChild,ViewContainerRef } from '@angular/core';
import { QueryparamsheaderComponent } from '../queryparamsheader/queryparamsheader.component';

@Component({
  selector: 'app-addparams',
  templateUrl: './addparams.component.html',
  styleUrls: ['./addparams.component.css']
})
export class AddparamsComponent implements OnInit {

  @Output() selectedParam = new EventEmitter<string>();

  params = [
    {value:'Add Params'},
    {value:'Header Params'},
    {value:'Query Params'},
    {value:'Path Params'}
  ];

  selectedParamValue: any;

  @ViewChild('paramscontainer', {read: ViewContainerRef}) paramscontainer: ViewContainerRef;

  paramComponents = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  addParamControls(e: Event, paramdropdownvalue: string){
      var selectedVal = this.params[parseInt(paramdropdownvalue.substring(0,1))].value;
      this.selectedParam.emit(selectedVal);
      var componentFactory: any = undefined;

      if(selectedVal === 'Query Params'){
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(QueryparamsheaderComponent);
      }

      const component = this.paramscontainer.createComponent(componentFactory);
      this.paramComponents.push(component);

      return true;
  }

  resetParamDropDownValue(){
    this.selectedParamValue = this.params[0];
  }

}
