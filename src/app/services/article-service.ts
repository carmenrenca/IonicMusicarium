import {Injectable } from '@angular/core';
import {Article} from '../../models/Article';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';

@Injectable()
export class ArticleService{
    public url:string;

    constructor( private _http: HttpClient){
            this.url= global.url;

    }
    pruebas(){
        return 'soy el servicio de articulos ';
    }

    getArticles():Observable<any>{
        return this._http.get(this.url+'articles');

    }
  
    getArticle(articleId):Observable<any>{
        return this._http.get(this.url+'article/'+articleId);

    }

    getImage(image):Observable<any>{
        return this._http.get(this.url+'get-image/'+image);

    }
    getcategori():Observable<any>{
        return this._http.get(this.url+'articleCategori');
    }

    createpedido( cliente, articulos, total):Observable<any>{
        console.log(cliente);
        console.log(articulos);
        console.log(total);
        return this._http.post(this.url+'pedido/', {Status__c:"Pendiente", Infocliente:cliente, Ciudad__c:cliente.direccion,articulos: articulos, total__c:total, email:cliente.email});
    }
}

