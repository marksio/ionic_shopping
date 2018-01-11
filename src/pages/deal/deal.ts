import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Deal page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-deal',
  templateUrl: 'deal.html',
})
export class Deal {

  items: Object[] = []
  itemsInCart: Object[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {id: 1, img: 'http://lorempixel.com/200/200', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0 },
      {id: 2, img: 'http://lorempixel.com/201/201', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0 },
      {id: 3, img: 'http://lorempixel.com/202/202', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0 },
      {id: 4, img: 'http://lorempixel.com/203/203', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0 },
      {id: 5, img: 'http://lorempixel.com/204/204', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0 },
      {id: 6, img: 'http://lorempixel.com/205/205', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0 },
      {id: 7, img: 'http://lorempixel.com/206/206', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0 },
      {id: 8, img: 'http://lorempixel.com/207/207', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM" , quantityInCart: 0, sum: 0},
      {id: 9, img: 'http://lorempixel.com/208/208', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0 }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Deal');
  }

  addToCart(item){
    item.quantityInCart += 1;
    item.sum = item.price*item.quantityInCart;
    this.itemsInCart.push(item);
  }

  reduceCart(item) {
    item.quantityInCart -= 1;
    item.sum = item.price*item.quantityInCart;
    this.itemsInCart.push(item);
  }
  
  // onLoadCart() {
  //   this.navCtrl.push(Cart);
  // }
}
