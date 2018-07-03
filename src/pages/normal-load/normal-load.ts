import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NormalLoadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-normal-load',
  templateUrl: 'normal-load.html',
})
export class NormalLoadPage {
  name:string;
  age:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name=navParams.get('name');
    this.age=navParams.get('age');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NormalLoadPage');
  }

}
