import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

import { DataServiceProvider } from '../providers/data-service/data-service';
import { ListPage } from '../pages/list/list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  public _menus: any;
  icons: string[];

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public dataService: DataServiceProvider) {
    this.initializeApp();
    this.menus()

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Tableau de bord', component: ListPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  /* fonction qui récupére la data du service provider */

  async menus() {
    const data = await this.dataService.getData();
    this._menus = data;
    console.log(this._menus);
  }


  clickM(M) {
    M.open = !M.open
  }
}
