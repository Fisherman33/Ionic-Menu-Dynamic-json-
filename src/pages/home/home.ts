import { Component } from '@angular/core';
import { NavController, App, NavParams, MenuController } from 'ionic-angular';

/* Service Provider */
import { DataServiceProvider } from './../../providers/data-service/data-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  public _menus: any;

  constructor(public app: App, public menu: MenuController, public navParams: NavParams, public navCtrl: NavController, public dataService: DataServiceProvider, public params: NavParams) {
  }

  ionViewDidLoad() {
    this.menus();
  }

  async menus() {
    const data = await this.dataService.getData();
    this._menus = data;
    console.log(this._menus);
  }

  clickM(M) {
    M.open = !M.open
  }
}
