import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article-service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {global} from '../../app/services/global';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],  providers: [ArticleService]
})
export class CarroPage implements OnInit {
  public articlescarro:any[]=[];
  public url:string;
  public suma: any;

  constructor(
    private _articleService : ArticleService,   private _router: Router, public alertController: AlertController
  ) { this.url= global.url}


  ngOnInit() {
    this.obtenerProductosLocalStorage();
  }

  obtenerProductosLocalStorage(){
      

    //Comprobar si hay algo en LS
    if(localStorage.getItem('carrito') === null){
        this.articlescarro = [];
    }
    else {
        this.articlescarro = JSON.parse(localStorage.getItem('carrito'));
        console.log(this.articlescarro)
    }
  // this.calculartotal();
     this.calculartotal();
}


eliminarcarro(articulo){

  this.articlescarro.forEach(function(entry, index) {
if(entry._id== articulo._id){


console.log("coincide"+articulo.Id)
this.articlescarro.splice(index,1);


}
}, this);
localStorage.setItem('carrito', JSON.stringify(this.articlescarro));
this.calculartotal();
}
async tramitarpedido(){
     
  if(this.articlescarro.length==0){
    const alert = await this.alertController.create({
      header: 'No Dispone de ningún Articulo en el carrito',
      subHeader: '',
      message: 'Añada los articulos que dese',
      buttons: ['OK']
    });

    await alert.present();
      
  }else{
    this._router.navigate(['/tramite']);
  }
}

continuarCompra(){
  this._router.navigate(['/home']);
}
eliminarTodoElCarro(){
  console.log("etra en elimiar")
localStorage.removeItem('carrito');
this.obtenerProductosLocalStorage;
this._router.navigate(['/home']);
}
 
calculartotal(){
      
  this.suma=0;
         this.articlescarro.forEach(function(entry) {
         this.suma=this.suma+entry.Precio__c*entry.unidad;
          
}, this);
this.suma=this.suma.toFixed(2);
console.log( this.suma);

   localStorage.setItem('Totalcarrito', JSON.stringify(this.suma));

  }  

}
