import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pathparams',
  templateUrl: './pathparams.component.html',
  styleUrls: ['./pathparams.component.css']
})
export class PathparamsComponent implements OnInit {

  componentReference: any;

  constructor() { }

  ngOnInit() {
  }

  removeComponent(){
    this.componentReference.destroy();
  }
}
