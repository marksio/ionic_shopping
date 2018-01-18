import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Deal } from '../deal/deal';
import { Cart } from '../cart/cart';
import { Menu } from '../menu/menu';
import { globalVariable } from '../../providers/globalVariable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  tab1Root = Deal;
  tab2Root = Cart;

  items: Object[] = []
  itemsInCart: Object[] = []

  badgeCount: any;

  constructor(public navCtrl: NavController, public globalVariable: globalVariable) {
    this.globalVariable.cartSumCount = 0;
  }
}
