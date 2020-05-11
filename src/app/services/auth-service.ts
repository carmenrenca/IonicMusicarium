import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {global} from './global';
import {UserI} from '../services/user';
import{JwtResponseI} from '../services/jwt-response';
import {tap} from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable()
export class AuthService{
authSubject= new BehaviorSubject(false);
private token: string;
public url:string;

    constructor( private _http: HttpClient ,public alertController: AlertController){
            this.url= global.url; 

    }
    login(user:UserI):Observable<any> {

   
     return this._http.post(this.url+"signin",user).pipe(tap(
       (res)=>{
         console.log(res);
         if(res){
          //guardar toekn
          console.log(res)
          console.log(user);
          this.saveToken(res.token);
         }else{
           console.log("errrr")
           this.presentAlert();
         }
       }
     ))
     
     // this.emitMethod()
   }

   registre(user:UserI):Observable<any> {

   
    return this._http.post(this.url+"signup",user).pipe(tap(
      (res)=>{
        if(res){
         //guardar toekn
         console.log(res)
         console.log(user);
         this.saveToken(res.token);
        }
      }
    ))
    
    // this.emitMethod()
  }
   private saveToken(token:string):void{
     localStorage.setItem("token", token);
   
this.token=token;
   }

   async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error en la autentificación',
      subHeader: 'Datos incorrectos',
      message: 'Intentelo de nuevo',
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
  
  }
   private getToken():string
{
  if(!this.token){
    this.token=localStorage.getItem("token");

  }
  return this.token;
}}

