import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth-service';
import {global} from '../../app/services/global';
import { Router } from  "@angular/router";
import {UserI} from '../services/user';

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

  constructor( private _authservice : AuthService, private  router:  Router ) {  this.url= global.url}

  ngOnInit() {
  }

onLogin(form):void{

  
this._authservice.login(form.value).subscribe(res=>{
  console.log(res);
  if(res){

    this.router.navigateByUrl('/home');
  }else{
  }
})}


}
