///<reference path="../../services/jquery.d.ts"/>
import { Component ,ElementRef,Renderer2} from '@angular/core';
import { NavController } from 'ionic-angular';
import {NormalLoadPage} from '../normal-load/normal-load';
import {Slides} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {ToastController} from 'ionic-angular';

//装饰器的用法，意思就是将次文件和home.html绑定了
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sliderDom(num) {
    let allIonSlide = this.sliderHeader.nativeElement.querySelectorAll('ion-slide')
    
    if(num){
      allIonSlide[this.slider.initialSlide].setAttribute('class', 'swiper-slide active-now');
    }else{
      allIonSlide.forEach(element=>{
        if(element){
          element.setAttribute('class','swiper-slide');
        }
      })
    }
  }
  ionSlideDidClick(id) {
    let top=$(".row").offsetTop;
    console.log(top);
   

    let toast=this.toastCtrl.create({
      message:this.Messages[id],
      duration:2000,
      position:'bottom'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();

    this.sliderDom(0);
    this.renderer.setAttribute(this.slider.clickedSlide,'class','swiper-slide active-now');
    if(!id)return;
    if(id==1)
    {
      this.picitems=this.navContent;
    }else{
      this.picitems=this.pic;
    }
      

    // this.navContent.map(item=>{
    //   if(item.id==id){
    //     this.title=item.src;
    //   }
    // });
  }
  
  slidesItems: Array<{name:string,src:string}>;
  picitems:Array<{id:Number,name:string,src:string}>;
  navContent: Array<{id:Number,name:string,src:string}>;
  pic:Array<{id:Number,name:string,src:string}>;
  Messages:string[];
  title:string = '';//后面string 表示此变量类型是string
  @ViewChild(Slides)slides:Slides;
  @ViewChild('ionSlides') slider:Slides;
  @ViewChild('sliderHeader')sliderHeader:ElementRef;
  constructor(public navCtrl: NavController,private toastCtrl:ToastController,public elementRef:ElementRef,public renderer:Renderer2) {
    
    
    this.slidesItems=[
      {name:"pic1",
      src:"assets/imgs/pic1.jpg"},
      {name:"pic2",
      src:"assets/imgs/pic2.jpg"},
      {name:"pic3",
      src:"assets/imgs/pic3.jpg"},
  ];
  this.pic=[
    {
      id:1,
      name:"秘制招牌青椒炒肉",
      src:"assets/imgs/pic2.jpg"
    },
    {
      id:2,
      name:"四川麻婆豆腐",
      src:"assets/imgs/pic2.jpg"
    },
    {
      id:3,
      name:"广东白切鸡",
      src:"assets/imgs/pic2.jpg"
    },
    {
      id:4,
      name:"湘菜",
      src:"assets/imgs/pic2.jpg"
    },
    {
      id:5,
      name:"川菜",
      src:"assets/imgs/pic2.jpg"
    },
    {
      id:6,
      name:"川菜",
      src:"assets/imgs/pic2.jpg"
    }
  ]
  this.navContent=[
    {
      id:1,
      name:"秘制招牌青椒炒肉",
      src:"assets/imgs/pic1.jpg"
    },
    {
      id:2,
      name:"四川麻婆豆腐",
      src:"assets/imgs/pic2.jpg"
    },
    {
      id:3,
      name:"广东白切鸡",
      src:"assets/imgs/pic3.jpg"
    },
    {
      id:4,
      name:"湘菜",
      src:"assets/imgs/pic1.jpg"
    },
    {
      id:5,
      name:"川菜",
      src:"assets/imgs/pic2.jpg"
    },
    {
      id:6,
      name:"川菜",
      src:"assets/imgs/pic3.jpg"
    },
    {
      id:7,
      name:"川菜",
      src:"assets/imgs/pic3.jpg"
    },
    {
      id:8,
      name:"川菜",
      src:"assets/imgs/pic3.jpg"
    },
    {
      id:9,
      name:"川菜",
      src:"assets/imgs/pic3.jpg"
    },
    {
      id:10,
      name:"川菜",
      src:"assets/imgs/pic3.jpg"
    },
    {
      id:11,
      name:"川菜",
      src:"assets/imgs/pic3.jpg"
    }
  ]
 
  this.Messages=[
    "你点击了秘制招牌青椒炒肉",
    "你点击了四川麻婆豆腐",
    "你点击了广东白切鸡",
    "你点击了湘菜",
    "你点击了川菜",
    "你点击了川菜"
  ]

  }
  
  ionViewDidLoad(){
    this.slider.freeMode=true;
    this.slider.slidesPerView=3;
    this.slider.loop=false;
    this.slider.centeredSlides=true;
    this.slider.slideToClickedSlide=true;
    //此处直接获得当前默认已选中的slider内容与title
    this.title=this.navContent[this.slider.initialSlide].src;
    if(this.slider && this.slider.clickedSlide){
      this.ionSlideDidClick(0);
    }else{
      this.sliderDom(1)
    }

    let div=this.sliderHeader.nativeElement.querySelector('ion-slides')
    
    
    console.log(div.offsetTop)

  }

  

  clickfunc(i){

    console.log(i);
    let toast=this.toastCtrl.create({
      message:this.Messages[i],
      duration:2000,
      position:'bottom'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
 

  goToSlide(){
    this.slides.slideTo(2,500);
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
