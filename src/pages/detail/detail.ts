import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { globalVariable } from '../../providers/globalVariable';
import { ImageViewerController } from "ionic-img-viewer";
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the Detail page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class Detail {
  
  items: any;
  itemsInCart: Object[] = []
  itemIndex: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public globalVariable: globalVariable, public imageViewerCtrl: ImageViewerController) {//, public imageViewerCtrl: ImageViewerController) {
    let id = navParams.get('id');
    let quantityInCart = navParams.get('quantityInCart');
    let sum = navParams.get('sum');
    let title = navParams.get('title');
    let img = navParams.get('img');
    let price = navParams.get('price');
    
    // allItem(id);
    switch (id) {
      case 1 : {
        this.items = {id: 1, img: img, title: title, price: price, desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "10% off", np: 135 };
        break;
      }
      case 2 : {
        this.items = {id: 2, img: img, title: title, price: price, desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "Buy 3 Free 1", np: "" };
        break;
      }
      case 3 : {
        this.items = {id: 3, img: img, title: title, price: price, desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
        break;
      }
      case 4 : {
        this.items = {id: 4, img: img, title: title, price: price, desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "15% off", np: "145" };
        break;
      }
      case 5 : {
        this.items = {id: 5, img: img, title: title, price: price, desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
        break;
      }
      case 6 : {
        this.items = {id: 6, img: img, title: title, price: price, desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "30% off", np: "160" };
        break;
      }
      case 7 : {
        this.items = {id: 7, img: img, title: title, price: price, desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
        break;
      }
      case 8 : {
        this.items = {id: 8, img: img, title: title, price: price, desc: 'Very Good', currency: "RM" , quantityInCart: quantityInCart, sum: sum, promo: "Buy 1 Free 1", np: "" };
        break;
      }
      case 9 : {
        this.items = {id: 9, img: img, title: title, price: price, desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
        break;
      }
      case 10 : {
        this.items = {id: 10, img: img, title: title, price: price, desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
        break;
      }
    }
  }

  onClick(imageToView) {
    const viewer = this.imageViewerCtrl.create(imageToView)
    viewer.present();
  }

  addCart(items) {
    this.globalVariable.cart.push(items);
    items.quantityInCart += 1;
    this.globalVariable.cartSumCount += 1;
    items.sum = items.price*items.quantityInCart;
    this.globalVariable.sum+=items.price;
    let toast = this.toastCtrl.create({
      message: 'Added to Cart',
      duration: 500,
      position: "top"
    });
    toast.present();
  }
  
  reduceCart(items) {
    this.globalVariable.cart.splice(this.globalVariable.cart.indexOf(items), 1);
    items.quantityInCart -= 1;
    this.globalVariable.cartSumCount -= 1;
    items.sum = items.price*items.quantityInCart;
    this.globalVariable.sum-=items.price;
    let toast = this.toastCtrl.create({
      message: 'Remove from Cart',
      duration: 500,
      position: "top"
    });
    toast.present();
  }

  ionViewWillLeave() {
    this.globalVariable.quantityInCart = this.items.quantityInCart;
    this.globalVariable.itemId = this.items.id;
  }
}
