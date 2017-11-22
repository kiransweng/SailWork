import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addparams',
  templateUrl: './addparams.component.html',
  styleUrls: ['./addparams.component.css']
})
export class AddparamsComponent implements OnInit {

  param_type: any

  constructor() { }

  ngOnInit() {
  }

  setParam(sentParamValue: string){
    alert(sentParamValue)
    this.param_type = sentParamValue
  }

}
