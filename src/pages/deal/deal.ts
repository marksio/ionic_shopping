import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Detail } from '../detail/detail';
import { globalVariable } from '../../providers/globalVariable';

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
  @ViewChild('mySearchbar') mySearchbar;

  items: any[] = []
  searchItems: any[] = [];
  itemsInCart: Object[] = []
  itemIndex: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public globalVariable : globalVariable ) {
    
    this.items = [
      {id: 1, img: 'http://lorempixel.com/200/200', title: 'T-Shirt', price: 132, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "10% off", np: "135", cart: [], category: "grocery" },
      {id: 2, img: 'http://lorempixel.com/201/201', title: 'Smart Phone', price: 1699, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "Buy 3 Free 1", np: "", cart: [], category: "it"  },
      {id: 3, img: 'http://lorempixel.com/202/202', title: 'Camera', price: 123, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "", cart: [], category: "it"  },
      {id: 4, img: 'http://lorempixel.com/203/203', title: 'T-Shirt', price: 132, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "15% off", np: "145", cart: [], category: "grocery"  },
      {id: 5, img: 'http://lorempixel.com/204/204', title: 'Smart Phone', price: 1699, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "", cart: [], category: "it"  },
      {id: 6, img: 'http://lorempixel.com/205/205', title: 'Camera', price: 123, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "30% off", np: "160", cart: [], category: "it"  },
      {id: 7, img: 'http://lorempixel.com/206/206', title: 'T-Shirt', price: 132, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "", cart: [], category: "grocery"  },
      {id: 8, img: 'http://lorempixel.com/207/207', title: 'Smart Phone', price: 1699, desc: 'Very Good', currency: "RM" , quantityInCart: 0, sum: 0, promo: "Buy 1 Free 1", np: "", cart: [], category: "it"  },
      {id: 9, img: 'http://lorempixel.com/208/208', title: 'Camera', price: 123, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "", cart: [], category: "it"  },
      {id: 10, img: 'http://lorempixel.com/209/209', title: 'iPhone', price: 3424, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "", cart: [], category: "it"  }
    ];
    this.searchItems = this.items;
  }

  addToCart(item){
    item.quantityInCart += 1;
    item.sum = item.price*item.quantityInCart;
    this.globalVariable.sum+=item.price;
    let newCartItem = { itemID: item.id, id : this.itemIndex++, quantityInCart: item.quantityInCart, price: item.price };
    item.cart.push(newCartItem);
    this.globalVariable.cart.push(item);
    this.globalVariable.cartSumCount += 1;
    let toast = this.toastCtrl.create({
      message: 'Added to Cart',
      duration: 500,
      position: "top"
    });
    toast.present();
  }

  removeFromCart(item) {
    this.globalVariable.cart.splice(this.globalVariable.cart.indexOf(item), 1);
    item.quantityInCart -= 1;
    item.sum = item.price*item.quantityInCart;
    this.globalVariable.sum-=item.price;
    this.itemsInCart.push(item);
    this.globalVariable.cartSumCount -= 1;
    let toast = this.toastCtrl.create({
      message: 'Remove from Cart',
      duration: 500,
      position: "top"
    });
    toast.present();
  }
  
  viewItem(id, title, img, quantityInCart, sum, price) {
    this.navCtrl.push(Detail, { id: id, title: title, img:img ,quantityInCart: quantityInCart, sum: sum, price: price });
  }

  ionViewWillEnter() {
    if(this.globalVariable.quantityInCart > 0) {
      for(let i = 0; i < this.items.length; i++) {
        let myItem: any = this.items[i];
        if(myItem.id == this.globalVariable.itemId) {
          myItem.quantityInCart = this.globalVariable.quantityInCart;
          myItem.sum = myItem.price*myItem.quantityInCart;
          this.items[i] = myItem;
          break;
        }
      }
      this.globalVariable.quantityInCart = 0;
      this.globalVariable.itemId = 0;
    }
  }

  getItems(event) {
    let searchCriteria = this.mySearchbar.value;
    let filtered = this.items.filter((item) => { 
      return ((item.title.toLowerCase().indexOf(searchCriteria.toLowerCase()) > -1)); 
    });
    this.searchItems = filtered;
  }

  // filterItems(searchTerm){
  //   let filtered = this.items.filter((item) => { 
  //       return ((item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)); 
  //   });
  //   this.searchItems = filtered;
  // }

  applyCategoryFilter() {
    
  }
}
