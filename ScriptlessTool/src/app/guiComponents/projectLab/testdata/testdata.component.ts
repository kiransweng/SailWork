import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testdata',
  templateUrl: './testdata.component.html',
  styleUrls: ['./testdata.component.css']
})
export class TestdataComponent implements OnInit {

  testdata_value = "test value"

  constructor() { }

  ngOnInit() {
  }

}
