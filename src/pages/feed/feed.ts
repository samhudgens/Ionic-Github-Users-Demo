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

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.restProvider.getAllUsers()
    .then(data => {
        for (let i = 0; i < data.length; i++) {
          this.users.push(data[i]);
        }
      console.log(this.users);
    });
  }

  getNumberOfRepos() {
    this.restProvider.getNumberOfRepos()
    .then(data => {
      this.numberOfRepos = data;
      console.log(this.numberOfRepos);
    });
  }


  addUsersOnScroll() {

  }

}
