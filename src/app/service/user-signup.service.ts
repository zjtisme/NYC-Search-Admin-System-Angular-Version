import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class UserSignupService {
  constructor(private http: Http){}

  createSignupUserObservable(user) {
    return this.http.post("http://ec2-52-33-64-192.us-west-2.compute.amazonaws.com:8080/users/", user);
  }
}
