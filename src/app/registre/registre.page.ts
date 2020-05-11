import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth-service';
import {global} from '../../app/services/global';
import { Router } from  "@angular/router";
import {UserI} from '../services/user';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],  providers: [AuthService]
})
export class RegistrePage implements OnInit {
  public url:string;
  constructor( private _authservice : AuthService, private  router:  Router) {  this.url= global.url}

  ngOnInit() {
  }

  onRegistre(form):void{

    this._authservice.registre(form.value).subscribe(res=>{
      this.router.navigateByUrl('/home');
    })}
}
