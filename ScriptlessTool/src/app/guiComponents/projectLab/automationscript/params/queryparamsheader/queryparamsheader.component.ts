import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver, ViewChild,ViewContainerRef} from '@angular/core';
import { QueryparamsComponent } from '../queryparams/queryparams.component';

@Component({
  selector: 'app-queryparamsheader',
  templateUrl: './queryparamsheader.component.html',
  styleUrls: ['./queryparamsheader.component.css']
})

export class QueryparamsheaderComponent implements OnInit {

  @ViewChild('queryparamcontainer', {read: ViewContainerRef}) queryparamcontainer: ViewContainerRef;

  queryParamComponents = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  addQueryParams(){
      var componentFactory: any = this.componentFactoryResolver.resolveComponentFactory(QueryparamsComponent);
      const component = this.queryparamcontainer.createComponent(componentFactory);
      if(component.instance instanceof QueryparamsComponent){
        component.instance.componentReference = component;
      }
      this.queryParamComponents.push(component);
  }
}