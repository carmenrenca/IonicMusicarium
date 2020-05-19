import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth-service';
import {global} from '../../app/services/global';
import { Router } from  "@angular/router";
import {UserI} from '../services/user';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],  providers: [AuthService]
})
export class RegistrePage implements OnInit {
  public url:string;
  constructor( private _authservice : AuthService, private  router:  Router , public alertController: AlertController) {  this.url= global.url}

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error al Registrarse',
      subHeader: 'Sus datos son incorrectos',
      message: 'Prueba a introducir de nuevo los datos.',
      buttons: ['OK']
    });

    await alert.present();
  }
  onRegistre(form):void{

    this._authservice.registre(form.value).subscribe(res=>{
      if(res){
        this.router.navigateByUrl('/home');

      }
    } , error=>{
      console.log(error);
      this.presentAlert();
    })}
}
