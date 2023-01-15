import { Component, OnInit } from '@angular/core';
import { ConexProductosService,Producto } from 'src/app/services/conexiones/conex-productos/conex-productos.service';
@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {


  ListaProducto:Producto[]=[];

  constructor(private canexproduc:ConexProductosService) { }

  ngOnInit(): void {
    this.listarProductos();
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


}