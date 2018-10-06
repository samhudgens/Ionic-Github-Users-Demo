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

  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getUsers();

    // this.http.get("https://api.github.com/users?since=135").map(res => res.json()).subscribe(data => {
    //   this.users = data.data.children;
    // });
  }

  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
