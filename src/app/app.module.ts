import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicImageViewerModule } from 'ionic-img-viewer';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

import { HttpModule } from '@angular/http';

// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Menu } from '../pages/menu/menu';
import { Cart } from '../pages/cart/cart';
import { Detail } from '../pages/detail/detail';
import { Deal } from '../pages/deal/deal';
import { globalVariable } from '../providers/globalVariable';

class MyErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    // do something with the error
  }
}

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
    HttpModule,
    IonicImageViewerModule
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
    globalVariable,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
