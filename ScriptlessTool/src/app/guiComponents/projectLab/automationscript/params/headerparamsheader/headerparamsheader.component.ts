import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver, Type, ViewChild,ViewContainerRef } from '@angular/core';
import { HeaderparamsComponent } from '../headerparams/headerparams.component';

@Component({
  selector: 'app-headerparamsheader',
  templateUrl: './headerparamsheader.component.html',
  styleUrls: ['./headerparamsheader.component.css']
})
export class HeaderparamsheaderComponent implements OnInit {

  @ViewChild('headerparamcontainer', {read: ViewContainerRef}) headerparamcontainer: ViewContainerRef;

  headerParamComponents = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
   }

  ngOnInit() {
  }

  addHeaderParams(){
      var componentFactory: any = this.componentFactoryResolver.resolveComponentFactory(HeaderparamsComponent);
      const component = this.headerparamcontainer.createComponent(componentFactory);
      component.instance.componentReference = component;
      this.headerParamComponents.push(component);
  }
}
