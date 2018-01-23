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
    // switch (id) {
    //   case 1 : {
    //     this.items = {id: 1, img: 'http://lorempixel.com/200/200', title: 'T-Shirt', price: 132, desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "10% off", np: 135 };
    //     break;
    //   }
    //   case 2 : {
    //     this.items = {id: 2, img: 'http://lorempixel.com/201/201', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "Buy 3 Free 1", np: "" };
    //     break;
    //   }
    //   case 3 : {
    //     this.items = {id: 3, img: 'http://lorempixel.com/202/202', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
    //     break;
    //   }
    //   case 4 : {
    //     this.items = {id: 4, img: 'http://lorempixel.com/203/203', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "15% off", np: "145" };
    //     break;
    //   }
    //   case 5 : {
    //     this.items = {id: 5, img: 'http://lorempixel.com/204/204', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
    //     break;
    //   }
    //   case 6 : {
    //     this.items = {id: 6, img: 'http://lorempixel.com/205/205', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "30% off", np: "160" };
    //     break;
    //   }
    //   case 7 : {
    //     this.items = {id: 7, img: 'http://lorempixel.com/206/206', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
    //     break;
    //   }
    //   case 8 : {
    //     this.items = {id: 8, img: 'http://lorempixel.com/207/207', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM" , quantityInCart: quantityInCart, sum: sum, promo: "Buy 1 Free 1", np: "" };
    //     break;
    //   }
    //   case 9 : {
    //     this.items = {id: 9, img: 'http://lorempixel.com/208/208', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
    //     break;
    //   }
    //   case 10 : {
    //     this.items = {id: 10, img: 'http://lorempixel.com/209/209', title: 'iPhone', price: '3424', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
    //     break;
    //   }
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
