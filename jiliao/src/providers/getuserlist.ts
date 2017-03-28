import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Getuserlist {

  constructor(public http: Http) {
    console.log('Hello Getuserlist Provider');
  }
  getuserlist() {
        return this.http.get('./assets/data/chatlist.json')
            .toPromise()
            .then(response => response.json())
            .catch(err => {
                return Promise.reject(err)
            })
    }
}
