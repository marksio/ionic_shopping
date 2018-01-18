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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public globalVariable: globalVariable, public imageViewerCtrl: ImageViewerController) {//, public imageViewerCtrl: ImageViewerController) {
    let id = navParams.get('id');
    let quantityInCart = navParams.get('quantityInCart');
    let sum = navParams.get('sum');
    // allItem(id);
    switch (id) {
      case 1 : {
        this.items = {id: 1, img: 'http://lorempixel.com/200/200', title: 'T-Shirt', price: 132, desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "10% off", np: 135 };
        break;
      }
      case 2 : {
        this.items = {id: 2, img: 'http://lorempixel.com/201/201', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "Buy 3 Free 1", np: "" };
        break;
      }
      case 3 : {
        this.items = {id: 3, img: 'http://lorempixel.com/202/202', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
        break;
      }
      case 4 : {
        this.items = {id: 4, img: 'http://lorempixel.com/203/203', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "15% off", np: "145" };
        break;
      }
      case 5 : {
        this.items = {id: 5, img: 'http://lorempixel.com/204/204', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
        break;
      }
      case 6 : {
        this.items = {id: 6, img: 'http://lorempixel.com/205/205', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "30% off", np: "160" };
        break;
      }
      case 7 : {
        this.items = {id: 7, img: 'http://lorempixel.com/206/206', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
        break;
      }
      case 8 : {
        this.items = {id: 8, img: 'http://lorempixel.com/207/207', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM" , quantityInCart: quantityInCart, sum: sum, promo: "Buy 1 Free 1", np: "" };
        break;
      }
      case 9 : {
        this.items = {id: 9, img: 'http://lorempixel.com/208/208', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
        break;
      }
      case 10 : {
        this.items = {id: 10, img: 'http://lorempixel.com/209/209', title: 'iPhone', price: '3424', desc: 'Very Good', currency: "RM", quantityInCart: quantityInCart, sum: sum, promo: "", np: "" };
        break;
      }
    }
  }

  onClick(imageToView) {
    const viewer = this.imageViewerCtrl.create(imageToView)
    viewer.present();
  }

  // allItem (id) {
  //   switch (id) {
  //     case 1 : {
  //       this.items = {id: 1, img: 'http://lorempixel.com/200/200', title: 'T-Shirt', price: 132, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "10% off", np: 135 };
  //       break;
  //     }
  //     case 2 : {
  //       this.items = {id: 2, img: 'http://lorempixel.com/201/201', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "Buy 3 Free 1", np: "" };
  //       break;
  //     }
  //     case 3 : {
  //       this.items = {id: 3, img: 'http://lorempixel.com/202/202', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "" };
  //       break;
  //     }
  //     case 4 : {
  //       this.items = {id: 4, img: 'http://lorempixel.com/203/203', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "15% off", np: "145" };
  //       break;
  //     }
  //     case 5 : {
  //       this.items = {id: 5, img: 'http://lorempixel.com/204/204', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "" };
  //       break;
  //     }
  //     case 6 : {
  //       this.items = {id: 6, img: 'http://lorempixel.com/205/205', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "30% off", np: "160" };
  //       break;
  //     }
  //     case 7 : {
  //       this.items = {id: 7, img: 'http://lorempixel.com/206/206', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "" };
  //       break;
  //     }
  //     case 8 : {
  //       this.items = {id: 8, img: 'http://lorempixel.com/207/207', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM" , quantityInCart: 0, sum: 0, promo: "Buy 1 Free 1", np: "" };
  //       break;
  //     }
  //     case 9 : {
  //       this.items = {id: 9, img: 'http://lorempixel.com/208/208', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "" };
  //       break;
  //     }
  //     case 10 : {
  //       this.items = {id: 10, img: 'http://lorempixel.com/209/209', title: 'iPhone', price: '3424', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "" };
  //       break;
  //     }
  //   }
  // }

  addToCart(id) {
    this.items.quantityInCart += 1;
    this.globalVariable.cartSumCount += 1;
    this.items.sum = this.items.price*this.items.quantityInCart;
    let toast = this.toastCtrl.create({
      message: 'Added to Cart',
      duration: 500,
      position: "top"
    });
    toast.present();
  }
  
  reduceCart(id) {
    this.items.quantityInCart -= 1;
    this.globalVariable.cartSumCount -= 1;
    this.items.sum = this.items.price*this.items.quantityInCart;
    let toast = this.toastCtrl.create({
      message: 'Remove from Cart',
      duration: 500,
      position: "top"
    });
    toast.present();
  }

}
