import { Component, OnInit } from '@angular/core';
import { ConexProductosService,Producto } from 'src/app/services/conexiones/conex-productos/conex-productos.service';
@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {


  ListaProducto:Producto[]=[];

  constructor() { }

  ngOnInit(): void {
    this.listarProductos();
  }
  listarProductos()
{

  
}


}