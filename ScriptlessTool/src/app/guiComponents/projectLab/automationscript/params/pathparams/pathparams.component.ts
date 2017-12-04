import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pathparams',
  templateUrl: './pathparams.component.html',
  styleUrls: ['./pathparams.component.css']
})
export class PathparamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  componentReference: any;

  removeComponent(){
    this.componentReference.destroy();
  }
}
