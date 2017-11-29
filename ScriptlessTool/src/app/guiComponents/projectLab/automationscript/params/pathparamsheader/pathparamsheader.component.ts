import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver, Type, ViewChild,ViewContainerRef } from '@angular/core';
import { PathparamsComponent } from '../pathparams/pathparams.component';

@Component({
  selector: 'app-pathparamsheader',
  templateUrl: './pathparamsheader.component.html',
  styleUrls: ['./pathparamsheader.component.css']
})
export class PathparamsheaderComponent implements OnInit {

  @ViewChild('pathparamcontainer', {read: ViewContainerRef}) pathparamcontainer: ViewContainerRef;

  pathParamComponents = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
   }

  ngOnInit() {
  }

  addPathParams(){
      var componentFactory: any = this.componentFactoryResolver.resolveComponentFactory(PathparamsComponent);
      const component = this.pathparamcontainer.createComponent(componentFactory);
      this.pathParamComponents.push(component);
  }

}
