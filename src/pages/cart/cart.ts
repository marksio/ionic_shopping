import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { globalVariable } from '../../providers/globalVariable';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public globalVariable: globalVariable) {
    // let cart = globalVariable.cart;
    // for(let i = 0; i < cart.length; i++) {
    //   let cartid = cart[i].id;
    //   let t = 0;
    //   t+=i;
    //   // globalVariable.cart[i] = cartid.merge("id", cart[i], cart[t]);
    //   console.log(cartid.merge("id", cart[i], cart[t]));
    // }
    
  }
  remove(item) {
    this.globalVariable.cart.splice(this.globalVariable.cart.indexOf(item), 1);
    this.globalVariable.cartSumCount-=1;
    item.quantityInCart -= 1;
    item.sum = item.price*item.quantityInCart;
    this.globalVariable.sum-=item.price;
    this.itemsInCart.push(item);
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
  checkout () {
    alert('Thank You for shopping with us');
    location.reload();
  }
}
