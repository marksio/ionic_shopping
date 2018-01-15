import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from "ionic-img-viewer";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public imageViewerCtrl: ImageViewerController) {
  }

  onClick(imageToView) {
    const viewer = this.imageViewerCtrl.create(imageToView)
    viewer.present();
  }

}
