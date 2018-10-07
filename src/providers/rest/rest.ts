import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = "https://api.github.com";
  userListCounter = 30;

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getAllUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"/users").subscribe(data => {
        resolve(data);
        // console.log(this.http.head(this.apiUrl+"/users"));
      }, err => {
        console.log(err);
      });
    });
  }


  getNumberOfRepos() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"/users/samhudgens/repos").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // getUser(username) {
  //   return new Promise(resolve => {
  //     this.http.get(this.apiUrl+`/users/${username}`).subscribe(data => {
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });
  // }

  addUsersOnScroll() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"/users?since="+this.userListCounter)
      .subscribe(data => {
        resolve(data);
        this.userListCounter += 30;
      }, err => {
        console.log(err);
      });
    });
  }

}
