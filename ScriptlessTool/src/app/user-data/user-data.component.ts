import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver, Type, ViewChild,ViewContainerRef } from '@angular/core';
import { NameComponent } from '../name/name.component';
import { EmailComponent } from '../email/email.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  steps = [
    {value:'Add Data'},
    {value:'Name'},
    {value:'Email'},
  ];

  selectedStepValue: any;

  @ViewChild('stepscontainer', {read: ViewContainerRef}) stepscontainer: ViewContainerRef;

  stepsComponents = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() { }

  addStepControls(e: Event, stepDropDownValue: string){
    var selectedVal = this.steps[parseInt(stepDropDownValue.substring(0,1))].value;
    var componentFactory: any = undefined;

    if(selectedVal === 'Name'){
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(NameComponent);
    }else if(selectedVal === 'Email'){
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(EmailComponent);
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

  createUserRecord()

}
