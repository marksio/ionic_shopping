import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
import { Cart } from '../cart/cart';
import { Deal } from '../deal/deal';
import { HomePage } from '../home/home';


export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class Menu {

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'Home', pageName: 'HomePage', tabComponent: 'Deal', index: 0, icon: 'home' },
    { title: 'Cart', pageName: 'HomePage', tabComponent: 'Cart', index: 1, icon: 'cart' },
  ];
 
  constructor(public navCtrl: NavController) { }
 
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNavs() && page.index != undefined) {
      console.log('this.nav.getActiveChildNavs()');
      console.log(this.nav.getActiveChildNav());
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNavs()[0];
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
 
}