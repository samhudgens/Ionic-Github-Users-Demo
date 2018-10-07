import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Http } from "@angular/http";
// import "rxjs/add/operator/map";
import { RestProvider } from "../../providers/rest/rest";


@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  users: any[];
  numberOfRepos: any;

  users = [];
  since = 0;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.restProvider.getAllUsers(this.since)
    .then(data => {
        for (let i = 0; i < data.length; i++) {
          this.users.push(data[i]);
        }
        // this.since += 30;
        console.log(this.users);
    });
  }

  // getUsers() {
  //   this.restProvider.getUsers()
  //   .then(data => {
  //     this.users = data;
  //     console.log(this.users);
  //   });
  // }

  getNumberOfRepos() {
    this.restProvider.getNumberOfRepos()
    .then(data => {
      this.numberOfRepos = data;
      console.log(this.numberOfRepos);
    });
  }


  addUsersOnScroll(infiniteScroll) {
    this.since += 30;
    console.log("Begin async operation");
    this.restProvider.getAllUsers(this.since)
    .then(data => {
      console.log(data);
      setTimeout(() => {
        for (let i = 0; i < data.length; i++) {
          this.users.push( data[i] );
        }
        console.log(this.users);
        console.log(data);
      console.log("Async operation has ended");
      // Messed up here way earlier, this was the problem. I commented out the line below because I was getting errors, but it was because I had put "addUsersOnScroll.complete" instead of infiniteScroll.complete
      infiniteScroll.complete();
      }, 500);
    })
  }

}
