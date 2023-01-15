import { Component, OnInit } from '@angular/core';
import { ConexProductosService,Producto,administracion } from 'src/app/services/conexiones/conex-productos/conex-productos.service';
import { ConexMarcaService,Marca } from 'src/app/services/conexiones/conex-marca/conex-marca.service';
@Component({
  selector: 'app-ninos',
  templateUrl: './ninos.component.html',
  styleUrls: ['./ninos.component.css']
})
export class NinosComponent implements OnInit {

  //ListaProducto:administracion[]=[];
  ListaMarca:Marca[]=[];

  constructor(private ConexProdcutoService:ConexProductosService,private Conex:ConexMarcaService) { }

  ngOnInit(): void {
    //this.listarProductos();
    this.listar();
  }
  /*
  listarProductos()
{
  console.log("Servicio ULTIMA NOVEDAD");
  this.ConexProdcutoService.getProdcuto().subscribe(
    res=>{
      console.log(res)
      this.ListaProducto=<any>res;
     
    },
    err => console.log(err)
    
  );

  } 
*/
  listar()
{
  console.log("Servicio ULTIMA NOVEDAD");
  this.Conex.getMarcas().subscribe(
    res=>{
      console.log(res)
      this.ListaMarca=<any>res;
     
    },
    err => console.log(err)
    
  );

  } 


}