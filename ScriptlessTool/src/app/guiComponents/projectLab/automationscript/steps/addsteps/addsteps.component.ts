import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver, Type, ViewChild,ViewContainerRef } from '@angular/core';
import { GetmethodComponent } from '../getmethod/getmethod.component';

@Component({
  selector: 'app-addsteps',
  templateUrl: './addsteps.component.html',
  styleUrls: ['./addsteps.component.css']
})
export class AddstepsComponent implements OnInit {

  steps = [
    {value:'Add Steps'},
    {value:'GET Method'},
    {value:'POST Method'},
    {value:'Delete'}
  ];

  selectedStepValue: any;

  @ViewChild('stepscontainer', {read: ViewContainerRef}) stepscontainer: ViewContainerRef;

  stepsComponents = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() { }

  addStepControls(e: Event, stepDropDownValue: string){
    var selectedVal = this.steps[parseInt(stepDropDownValue.substring(0,1))].value;
    var componentFactory: any = undefined;

    if(selectedVal === 'GET Method'){
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(GetmethodComponent);
    }else{
      return false;
    }

    const component = this.stepscontainer.createComponent(componentFactory);
    this.stepsComponents.push(component);
    return true;
  }

  resetStepDropDownValue(){
    this.selectedStepValue = this.steps[0];
  }
}
