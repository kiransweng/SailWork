import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class ReadJSON {

  constructor(private http: Http) {  }

  getJSONData(jsonFileNamePath){
    return this.http.get(jsonFileNamePath)
      .map( (response: Response) => {
        const data = response.json();
        console.log(data);
        return data; } );
   }
}
