import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexProductosService {

  url='/producto';
  constructor(private http:HttpClient) { }
  
  //getProdcuto
  getProdcuto(){
    return this.http.get(this.url);
  };

  getAdministacion(){
    return this.http.get(this.url);
  };

  //get un Producto
  getUnProducto(id:number){
    return this.http.get(this.url+'/'+id)
  };

  ///Agregar
  addProdcuto(producto:Producto){
    return this.http.post(this.url,producto);
  };

  //eliminar
  deleteusuario(id:number){
    return this.http.delete(this.url+'/'+id);

  };
  //modificar
  editUsuario(id:number, producto:Producto){
    return this.http.put(this.url+'/'+id,producto);

  };
}
console.log("Servicio en Uso PRODUCTO");
export interface Producto{
  pk_id_producto:number;
  codigo_producto:string; 
  img:string; 
  nombre_producto:string; 
  descripcion:string; 
  fk_marca:string; 
  genero:string; 
  talla:string; 
  costo:string;
  oferta:string;
  fk_nombre_categoria:string;
};
export interface administracion{
  pk_id_administrador:number;
  cedula:string; 
  nombre_admin:string; 
  apellido_admin:string; 
  usuario:string; 
  contrasena:string; 
  email:string; 
};
