import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//  import 'rxjs/add/operator/map';


@Injectable()
export class DataServiceProvider {

  constructor(private http: HttpClient) {
  }

  public getData(): Promise<any> {
    return new Promise((resolve) => {
      let url = "././../assets/data/listMenu.json";
      this.http.get(url).subscribe(data => {
        resolve(data)
      },
        err => {
          console.log('erreur')
        });
    })
  }
  
}