import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/*
  Generated class for the Firebase provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Firebase {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello Firebase Provider');
  }
  getShoppingItems() {
    return this.afd.list('/shoppingItems/');
  }
 
  addItem(name) {
    this.afd.list('/shoppingItems/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/shoppingItems/').remove(id);
  }

}
