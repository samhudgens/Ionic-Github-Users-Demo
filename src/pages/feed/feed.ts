import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  // API stuff
  users: any;

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get("https://api.github.com/users?since=135").map(res => res.json()).subscribe(data => {
      this.users = data.data.children;
      console.log(this.users);
    });

  }
}
