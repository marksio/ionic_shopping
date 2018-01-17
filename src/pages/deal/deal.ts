import { Firebase } from '../../providers/firebase';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Detail } from '../detail/detail';
import { Cart } from '../cart/cart';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController ) {
    
    this.items = [
      {id: 1, img: 'http://lorempixel.com/200/200', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "10% off", np: "135" },
      {id: 2, img: 'http://lorempixel.com/201/201', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "Buy 3 Free 1", np: "" },
      {id: 3, img: 'http://lorempixel.com/202/202', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "" },
      {id: 4, img: 'http://lorempixel.com/203/203', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "15% off", np: "145" },
      {id: 5, img: 'http://lorempixel.com/204/204', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "" },
      {id: 6, img: 'http://lorempixel.com/205/205', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "30% off", np: "160" },
      {id: 7, img: 'http://lorempixel.com/206/206', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "" },
      {id: 8, img: 'http://lorempixel.com/207/207', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM" , quantityInCart: 0, sum: 0, promo: "Buy 1 Free 1", np: "" },
      {id: 9, img: 'http://lorempixel.com/208/208', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "" }
    ];
    // this.navParams.get
  }

  addToCart(item){
    item.quantityInCart += 1;
    item.sum = item.price*item.quantityInCart;
    // this.itemsInCart.push(item);
    let toast = this.toastCtrl.create({
      message: 'Added to Cart',
      duration: 3000,
      position: "top"
    });
    toast.present();
  }

  add (id) {
    this.navCtrl.push(Cart, { id: id });
  }

  reduceCart(item) {
    item.quantityInCart -= 1;
    item.sum = item.price*item.quantityInCart;
    this.itemsInCart.push(item);
    let toast = this.toastCtrl.create({
      message: 'Remove from Cart',
      duration: 3000,
      position: "top"
    });
    toast.present();
  }
  
  viewItem(id) {
    console.log('myEvent');
    console.log(id);
    this.navCtrl.push(Detail, { id: id });
  }
  // onLoadCart() {
  //   this.navCtrl.push(Cart);
  // }
}
