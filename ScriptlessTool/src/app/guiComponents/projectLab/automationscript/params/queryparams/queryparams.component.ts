import { Component, OnInit, Output,EventEmitter, ViewChild, TemplateRef, Type } from '@angular/core';

@Component({
  selector: 'app-queryparams',
  templateUrl: './queryparams.component.html',
  styleUrls: ['./queryparams.component.css']
})
export class QueryparamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  componentReference: any;

  removeComponent(){
     if (this.componentReference) {
       this.componentReference.destroy();
     }
  }
}
