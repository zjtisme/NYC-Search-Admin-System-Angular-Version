import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserConfigureService {
  constructor(private http: Http){}

  createUpdateUserObservable(id, updatedUser) {
    return this.http.patch("http://ec2-52-33-64-192.us-west-2.compute.amazonaws.com:8080/users/"+id, updatedUser);
  }
}
