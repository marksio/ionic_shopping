import { Injectable } from '@angular/core';

/*
  Generated class for the Firebase provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class globalVariable {
  public cartSumCount : number;
  public cart : any[] = [];
  public itemId: number;
  public itemQuantity: number[];
  public itemSum: number[];
  public quantityInCart: number
  public sum: number = 0;
  public items: any;

  constructor( ) {    
    this.items = [
      {id: 1, img: 'http://lorempixel.com/200/200', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "10% off", np: "135" },
      {id: 2, img: 'http://lorempixel.com/201/201', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "Buy 3 Free 1", np: "" },
      {id: 3, img: 'http://lorempixel.com/202/202', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "" },
      {id: 4, img: 'http://lorempixel.com/203/203', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "15% off", np: "145" },
      {id: 5, img: 'http://lorempixel.com/204/204', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "" },
      {id: 6, img: 'http://lorempixel.com/205/205', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "30% off", np: "160" },
      {id: 7, img: 'http://lorempixel.com/206/206', title: 'T-Shirt', price: '132', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "" },
      {id: 8, img: 'http://lorempixel.com/207/207', title: 'Smart Phone', price: '1699', desc: 'Very Good', currency: "RM" , quantityInCart: 0, sum: 0, promo: "Buy 1 Free 1", np: "" },
      {id: 9, img: 'http://lorempixel.com/208/208', title: 'Camera', price: '123', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "" },
      {id: 10, img: 'http://lorempixel.com/209/209', title: 'iPhone', price: '3424', desc: 'Very Good', currency: "RM", quantityInCart: 0, sum: 0, promo: "", np: "" }
    ]; 
  }
}
