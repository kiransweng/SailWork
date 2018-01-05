import { Component, OnInit } from '@angular/core';
import {ReadJSON} from '../utils/readJson';

@Component({
  selector: 'app-display-user-details',
  templateUrl: './display-user-details.component.html',
  styleUrls: ['./display-user-details.component.css']
})
export class DisplayUserDetailsComponent implements OnInit {

  userDetails;

  constructor(private obj: ReadJSON) {
  }

  ngOnInit() {
    this.obj.getJSONData('../../../../userDetails.json').subscribe(res=>this.userDetails=res);
  }
}
