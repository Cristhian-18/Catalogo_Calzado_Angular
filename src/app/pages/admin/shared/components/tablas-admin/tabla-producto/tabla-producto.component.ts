import { Component, OnInit,Input  } from '@angular/core';
import { ConexProductosService,Producto} from 'src/app/services/conexiones/conex-productos/conex-productos.service';

@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent implements OnInit {

  @Input() dataEntrante:any;

  ListaProducto:Producto[]=[];

  constructor(private ConexProdcutoService:ConexProductosService) { }

  ngOnInit(): void {
    this.listarProductos();
  }
  
  listarProductos()
{
  console.log("Servicio PRODUCTOS TABLAS");
  this.ConexProdcutoService.getProdcuto().subscribe(
    res=>{
      
      console.log(res)
      this.ListaProducto=<any>res;
      console.log("Servicio ULTIMA A");
    },
    err => console.log(err)
    
  );

  } 
  getIndex(id:number){
    this.dataEntrante = id;
    console.log("ID: ",id);
    this.ConexProdcutoService.disparadorDetalle.emit(this.dataEntrante)
  }

}
