import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserLoginService {
  constructor(private http: Http){}

  createFindUserByNameObservable(username: string) {
    return this.http.get("http://ec2-52-33-64-192.us-west-2.compute.amazonaws.com:8080/users/username/"+username);
  }

  createCheckPasswordObservable(cand, password) {
    return this.http.get("http://ec2-52-33-64-192.us-west-2.compute.amazonaws.com:8080/users/checkpassword/"+cand.id+"/"+password);
  }
}
