import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { Detail } from '../detail/detail';
import { globalVariable } from '../../providers/globalVariable';
import { ContentType } from '@angular/http/src/enums';

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
  @ViewChild('myCate') myCate;

  // items: any[] = [];
  searchItems: any[] = [];
  itemsInCart: Object[] = [];
  itemIndex: number = 0;
  obj : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public globalVariable : globalVariable, public http: Http ) {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');

    let url = 'http://localhost/AngularJS-MVC-WebAPI-Fetch/api/student/GetStudents';
    let body = '';
    let globalHTTPGetInstance = this.http.get(url).subscribe((data) => {      
      var mydata: any = data;      
      this.obj = JSON.parse(mydata._body);
      this.searchItems = this.obj;
    });

    // this.items = [
    //   {id: 1, img: 'http://lorempixel.com/1000/1000', title: 'T-Shirt', price: 132, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "10% off", np: "135", cart: [], category: "grocery" },
    //   {id: 2, img: 'http://lorempixel.com/1001/1001', title: 'Smart Phone', price: 1699, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "Buy 3 Free 1", np: "", cart: [], category: "it"  },
    //   {id: 3, img: 'http://lorempixel.com/1002/1002', title: 'Camera', price: 123, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "", cart: [], category: "it"  },
    //   {id: 4, img: 'http://lorempixel.com/1003/1003', title: 'T-Shirt', price: 132, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "15% off", np: "145", cart: [], category: "grocery"  },
    //   {id: 5, img: 'http://lorempixel.com/1004/1004', title: 'Smart Phone', price: 1699, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "", cart: [], category: "it"  },
    //   {id: 6, img: 'http://lorempixel.com/1005/1005', title: 'Camera', price: 123, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "30% off", np: "160", cart: [], category: "it"  },
    //   {id: 7, img: 'http://lorempixel.com/1006/1006', title: 'T-Shirt', price: 132, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "", cart: [], category: "grocery"  },
    //   {id: 8, img: 'http://lorempixel.com/1007/1007', title: 'Smart Phone', price: 1699, desc: 'Very Good', currency: "RM" , quantityInCart: 0, sum: 0, promo: "Buy 1 Free 1", np: "", cart: [], category: "it"  },
    //   {id: 9, img: 'http://lorempixel.com/1008/1008', title: 'Camera', price: 123, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "", cart: [], category: "it"  },
    //   {id: 10, img: 'http://lorempixel.com/1009/1009', title: 'iPhone', price: 3424, desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "", cart: [], category: "it"  }
    // ];
    // this.searchItems = this.items;
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

  viewItem(id, name, img, quantityInCart, sum, price, des, np, promo, currency) {
    this.navCtrl.push(Detail, { id: id, title: name, img:img ,quantityInCart: quantityInCart, sum: sum, price: price, desc: des, np:np, promo: promo, currency: currency });
  }

  ionViewWillEnter() {
    // for(let i = 0; i < this.obj.length; i++) {
    //   let myItem: any = this.obj[i];
    //   if(myItem.id == this.globalVariable.itemId) {
    //     myItem.quantityInCart = this.globalVariable.quantityInCart;
    //     myItem.sum = myItem.price*myItem.quantityInCart;
    //     this.obj[i] = myItem;
    //     break;
    //   }
    // }
    // this.globalVariable.quantityInCart = 0;
    // this.globalVariable.itemId = 0;    
  }

  getItems(event) {
    let searchCriteria = this.mySearchbar.value;
    let filtered = this.obj.filter((item) => { 
      return ((item.title.toLowerCase().indexOf(searchCriteria.toLowerCase()) > -1)); 
    });
    this.searchItems = filtered;
  }

  applyCategoryFilter(event) {
    let searchCriteria = this.myCate.value;
    if(searchCriteria!='all') {
      let filtered = this.obj.filter((item) => { 
        return ((item.category.toLowerCase().indexOf(searchCriteria.toLowerCase()) > -1)); 
      });
      this.searchItems = filtered;
    }
    else {
      this.searchItems = this.obj;
    }
  }
}
