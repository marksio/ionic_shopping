import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { globalVariable } from '../../providers/globalVariable';
import * as _ from 'lodash';

/**
 * Generated class for the Cart page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class Cart {
  items: Object[] = []
  itemsInCart: Object[] = []
  itemIndex: number = 0;
  sortedCart: any[] = [];
  empty: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalVariable: globalVariable) {
    
  }
  remove(item) {
    // let searchCriteria = this.globalVariable.cart;
    // let filtered = this.globalVariable.cart.filter((item) => { 
    //   return ((this.globalVariable.cart.indexOf(searchCriteria) > -1)); 
    // });
    // if(filtered == this.empty) {
    //   alert('Thank You for shopping with us');
    // } else {
      this.globalVariable.cart.splice(this.globalVariable.cart.indexOf(item), 1);
      this.globalVariable.cartSumCount-=1;
      item.quantityInCart -= 1;
      item.sum = item.price*item.quantityInCart;
      this.globalVariable.sum-=item.price;
      this.itemsInCart.push(item);
    // }    
  }
  increment(item) {
    item.quantityInCart += 1;
    item.sum = item.price*item.quantityInCart;
    let newCartItem = { itemID: item.id, id : this.itemIndex++, quantityInCart: item.quantityInCart, price: item.price };
    this.globalVariable.sum+=item.price;
    item.cart.push(newCartItem);
    this.globalVariable.cart.push(item);
    this.globalVariable.cartSumCount += 1;
  }
  // pop(value) {
  //   alert(value);
  // }
  checkout () {
    alert('Thank You for shopping with us');
    location.reload();
  }
  ionViewWillEnter() {
    this.globalVariable.cartSort = [];
    this.sortedCart = _.sortBy(this.globalVariable.cart, 'id'); 
    let previousCartItem: any = { id: 0 };
    for(let i = 0; i < this.sortedCart.length; i++) {
      if (this.sortedCart[i].id != previousCartItem.id) {
        this.globalVariable.cartSort.push(this.sortedCart[i]);
      }
      previousCartItem = this.sortedCart[i];
    }
  }
}
