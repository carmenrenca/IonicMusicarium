import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import {ArticleService} from '../../app/services/article-service';
import {Article} from '../../models/Article';
import {global} from '../services/global';
@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
  providers:[ArticleService]
})
export class ArticlePage implements OnInit {
  public url:string;
  public productos:any[]=[];
  public article: Article= new Article("","","","",1);
  constructor(public _articleService:ArticleService, private  router:  Router, private _route: ActivatedRoute, private _router: Router) { this.url=global.url}

  ngOnInit() {
this._route.params.subscribe(params=>{
  let id= params['id'];
    this._articleService.getArticle(id).subscribe(
      response=>{
          if(response.article){
            console.log(response.article.Name);
            this.article=response.article;
            console.log(this.article);
          }else{
            this._router.navigate(['/home']);
          }
      }, error=>{
        console.log(error);
         this._router.navigate(['/home']);

      }
    )

})


  }
 

  addcarro(){
    var aux =false;
 this.productos = this.obtenerProductosLocalStorage();
      this.productos.forEach(function(entry) {

 if(entry._id== this.article._id){

 
       console.log("coincide"+entry._id)
   
   this.article.unidad=entry.unidad+1;
 
           localStorage.setItem('carrito', JSON.stringify(this.productos));
      console.log(this.productos)
       aux=true;      
 }
}, this);


     
  if(aux==false){
     //Agregar el producto al carrito
 this.article.unidad=1;
      this.productos.push( this.article);
        //Agregamos al LS
    localStorage.setItem('carrito', JSON.stringify(this.productos));

  }

 this.router.navigateByUrl('/carro');

  
  }

        //Comprobar que hay elementos en el LS
        obtenerProductosLocalStorage(){
          let productoLS;
  
          //Comprobar si hay algo en LS
          if(localStorage.getItem('carrito') === null){
              productoLS = [];
          }
          else {
              productoLS = JSON.parse(localStorage.getItem('carrito'));
          }
          return productoLS;
      }
}
