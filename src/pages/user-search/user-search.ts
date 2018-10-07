import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";

@Component({
  selector: 'page-user-search',
  templateUrl: 'user-search.html'
})
export class UserSearchPage {

  // searchQuery: string = "";
  results: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    // this.getUserByLogin();
  }

  getUserByLogin(ev: any) {
    const userQuery = ev.target.value;
    this.restProvider.getUserByLogin(userQuery)
    .then(data => {
      // this.results = data.items;
      this.results = data;
      this.results = Array.of(this.results);
      console.log(this.results);
    });
  }

}
