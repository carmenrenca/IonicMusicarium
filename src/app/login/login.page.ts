import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth-service';
import {global} from '../../app/services/global';
import { Router } from  "@angular/router";
import {UserI} from '../services/user';
import { error } from 'util';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [AuthService]
})
export class LoginPage implements OnInit {
  public url:string;
public  email: string = '';
public  password: string = '';

  constructor( private _authservice : AuthService, private  router:  Router, public alertController: AlertController ) {  this.url= global.url}

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error al loguearse',
      subHeader: 'Sus datos son incorrectos',
      message: 'Prueba a introducir de nuevo los datos.',
      buttons: ['OK']
    });

    await alert.present();
  }
onLogin(form):void{

  
this._authservice.login(form.value).subscribe(res=>{
  console.log(res);
  if(res){

    this.router.navigateByUrl('/home');
  }else{
    console.log("No entras")
  }
}, error=>{
  this.presentAlert();
})
}


}
