import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Menu } from '../pages/menu/menu';
import { Cart } from '../pages/cart/cart';
import { Detail } from '../pages/detail/detail';
import { Deal } from '../pages/deal/deal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Menu,
    Detail,
    Cart,
    Deal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({         //<----ENTER FIREBASE CREDENTIAL HERE
      apiKey: "AIzaSyDj0up1H3dpAJSdcWe4bq2eAG6QNTY1e7k",
      authDomain: "shopping-215.firebaseapp.com",
      databaseURL: "https://shopping-215.firebaseio.com",
      projectId: "shopping-215",
      storageBucket: "shopping-215.appspot.com",
      messagingSenderId: "72073823415"
    }),                                       
    AngularFireDatabaseModule,                
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Menu,
    Detail,
    Cart,
    Deal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
