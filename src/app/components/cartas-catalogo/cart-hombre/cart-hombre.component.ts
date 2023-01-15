import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioHombreService,hombres } from '../../../services/servicio_hombre/servicio-hombre.service';
import { ConexProductosService,Producto } from 'src/app/services/conexiones/conex-productos/conex-productos.service';

@Component({
  selector: 'app-cart-hombre',
  templateUrl: './cart-hombre.component.html',
  styleUrls: ['./cart-hombre.component.css']
})
export class CartHombreComponent implements OnInit {

  @Input() dataEntrante:any;

  hombres:hombres[]=[];
  info_modal:boolean=false;

  ListaProducto:Producto[]=[];

  constructor(private _serviciohombre:ServicioHombreService,private router:Router,private canexproduc:ConexProductosService) { }

  ngOnInit(){
    this.hombres=this._serviciohombre.gethombres()
    this.listarProductos();
  }

  getNombres(nombre:string){
    this.dataEntrante = nombre;
    this._serviciohombre.disparadorDetalle.emit(this.dataEntrante)
  }

  listarProductos()
{
  console.log("Servicio ULTIMA NOVEDAD");
  this.canexproduc.getProdcuto().subscribe(
    res=>{
      console.log(res)
      this.ListaProducto=<any>res;
           
    },
    err => console.log(err)
    
  );

  
}


  abrirmodal(){
  this.info_modal = true;
}

}
