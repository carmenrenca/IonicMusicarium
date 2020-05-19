export class Article{

    constructor(public Name:String, public Precio__c:String, public cantidad:String,public descripcion:string, public unidad:number){
        this.unidad=unidad;
        this.Name=Name;
     /** this.Name=Name;
        this.Precio__c=precio;
        this.Cantidad__c=cantidad;
        this.Descripcion__c=descripcion; */  
    
    }
/**title: String,
content: String,
date : {type:Date, default: Date.now},
imagen: String */
}

