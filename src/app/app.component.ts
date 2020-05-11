import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth-service';
import { Router } from  "@angular/router";
import {ArticleService} from './services/article-service';
import {global} from '../app/services/global';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import jwtDecode from 'jwt-decode'
import { decode } from 'punycode';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'] ,providers: [AuthService,ArticleService ]
})
export class AppComponent implements OnInit {
  public token=""; public email=""; public name="";public url:string;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
 
    {
      title: 'Carrito',
      url: '/folder/Outbox',
      icon: 'basket'
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Exit',
      url: '/login',
      icon: 'exit'
    }
  ];
  public labels = [];

  constructor(
    private _articleService : ArticleService,

    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, private _authservice : AuthService,  private  router:  Router
  ) {
    this.url= global.url
   // this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }

  getcategori(){
    this._articleService.getcategori().subscribe(res=>{
      console.log(res.Categoria);
      this.labels=res.Categoria;
     
      console.log(this.labels);
    
    })
  }
  GetToken(){
    console.log("token")
  this.token= localStorage.getItem('token');
  const decoded = jwtDecode(this.token);
this.email=decoded.email;
this.name=decoded.nombre;
if(!this.token){
  this.router.navigateByUrl('/login');
}
  }
  ngOnInit() {
    this.GetToken();
    this.getcategori();
  }
}
