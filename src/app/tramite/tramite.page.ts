import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import {Pedido} from '../../models/Pedido';
import {Cliente} from '../../models/Cliente';
import {ArticleService} from '../services/article-service';
import {Router, ActivatedRoute, Params} from '@angular/router'
import {ArticleService} from '../../app/services/article-service';
@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.page.html',
  styleUrls: ['./tramite.page.scss'],
})
export class TramitePage implements OnInit {
public articulos:any[]=[];
public suma: number;
public cliente= new Cliente("","","","","","")
public pedido = new Pedido("","","","","","",null,null);
  constructor(   private _articleService : ArticleService, private _route: ActivatedRoute, private _router: Router) { }
public direccion:String;
public provincia:String;
public ciudad:String;

  ngOnInit() {

    this.verificacliente();
  }

  verificacliente(){

    const token = localStorage.token
const decoded = jwtDecode(token);
this.cliente=decoded;
console.log(decoded)
this.direccion=decoded.direccion;
this.provincia=decoded.provincia;
this.ciudad=decoded.ciudad;
this.suma= JSON.parse(localStorage.getItem('Totalcarrito'));
 
     }

     finalizarpedido(){
      this.articulos = JSON.parse(localStorage.getItem('carrito'));
this._articleService.createpedido(this.cliente,this.articulos, this.suma).subscribe(    response=>{
  console.log("RESPONDE"+response.message)
  if(response.status=="success"){
   console.log("suucess")
   this._router.navigate(['/fin-tramite']);

  }else{
    
  }
    console.log( "error");
}, 
error=>{
  console.log(error+"error");
});
     }

}
