import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cart } from '../cart/cart';
import { Menu } from '../menu/menu';
import { Deal } from '../deal/deal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage:any = Menu;
  
  tab1Root = Deal;
  tab2Root = Cart;

  items: Object[] = []
  itemsInCart: Object[] = []

  constructor(public navCtrl: NavController) {

  }
}
