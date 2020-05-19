export class Pedido{


    constructor(public Ciudad__c:String, public cliente__c:String , public Direccion__c:string , public Provincia__c:string, public total__c:string, public date:string, public articulos:any[], public Infocliente:any[] ){
   }

}
