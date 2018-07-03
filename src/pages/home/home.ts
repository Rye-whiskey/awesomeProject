import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NormalLoadPage} from '../normal-load/normal-load';


//装饰器的用法，意思就是将次文件和home.html绑定了
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title:string = '';//后面string 表示此变量类型是string
  isShown : boolean = true;
  names : string[] = ['张三','李四','王二麻子'];

  constructor(public navCtrl: NavController) {

  }

  onChangeTitle(){
    console.log('HomePage');
    this.title="Home";
  }

  toLazyLoadPage(){
    this.navCtrl.push('LazyLoadPage',{
      name:'ionic',
      age:18
    });
  }

  toNormalLoadPage(){
    this.navCtrl.push(NormalLoadPage,{
      name:'handbook',
      age:20
    });
  }

}
