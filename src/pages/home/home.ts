import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Deal } from '../deal/deal';
import { Cart } from '../cart/cart';
import { Menu } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  tab1Root = Deal;
  tab2Root = Cart;

  items: Object[] = []
  itemsInCart: Object[] = []

  constructor(public navCtrl: NavController) {
  }    
}
