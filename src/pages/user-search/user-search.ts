import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";

@Component({
  selector: 'page-user-search',
  templateUrl: 'user-search.html'
})
export class UserSearchPage {

  // searchQuery: string = "";
  user: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getUser();
  }

  getUser() {
    const userQuery = ev.target.value;
    this.restProvider.getUser(userQuery)
    .then(data => {
      this.user = data;
      console.log(this.user);
    });
  }

}
