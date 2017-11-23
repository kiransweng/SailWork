import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addparams',
  templateUrl: './addparams.component.html',
  styleUrls: ['./addparams.component.css']
})
export class AddparamsComponent implements OnInit {

  displayQueryParamHeader=false;

  constructor() { }

  ngOnInit() {
  }

  setParam(e){
    this.displayQueryParamHeader=true;
  }

}
