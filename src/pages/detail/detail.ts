import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public globalVariable: globalVariable, public imageViewerCtrl: ImageViewerController, public http: Http) {//, public imageViewerCtrl: ImageViewerController) {
    let id = navParams.get('id');
    let quantityInCart = navParams.get('quantityInCart');
    let sum = navParams.get('sum');
    let title = navParams.get('title');
    let img = navParams.get('img');
    let price = navParams.get('price');
    let desc = navParams.get('desc');
    let promo = navParams.get('promo');
    let np = navParams.get('np');
    let currency = navParams.get('currency');
    
    this.items = {id: id, img: img, title: title, price: price, desc: desc, currency: currency, quantityInCart: quantityInCart, sum: sum, promo: promo, np: np };

    // let headers: Headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Access-Control-Allow-Origin', '*');

    // let url = 'http://localhost/AngularJS-MVC-WebAPI-Fetch/api/student/GetStudents';
    // let body = '';
    // let globalHTTPGetInstance = this.http.get(url).subscribe((data) => {      
    //   var mydata: any = data;      
    //   var obj = JSON.parse(mydata._body);
    //   this.items = obj;
    // });
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
