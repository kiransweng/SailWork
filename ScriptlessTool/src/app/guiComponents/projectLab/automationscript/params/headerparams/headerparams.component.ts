import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerparams',
  templateUrl: './headerparams.component.html',
  styleUrls: ['./headerparams.component.css']
})
export class HeaderparamsComponent implements OnInit {

  componentReference: any;

  constructor() { }

  ngOnInit() {
  }

  removeComponent(){
    this.componentReference.destroy();
  }

}
