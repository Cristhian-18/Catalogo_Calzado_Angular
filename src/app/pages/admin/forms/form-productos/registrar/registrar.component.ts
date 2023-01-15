import { Component, OnInit } from '@angular/core';
import { ConexMarcaService,Marca } from 'src/app/services/conexiones/conex-marca/conex-marca.service';
import { ConexProductosService, Producto } from 'src/app/services/conexiones/conex-productos/conex-productos.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  ListaMarca:Marca[]=[];

  modal_admin:boolean  = false;

  constructor(private ConexProdcutoService:ConexProductosService, private ConexMarca:ConexMarcaService) { }

  ngOnInit(): void {
    this.listarMarcas();
    
  }

  listarMarcas()
  {
  console.log("Servicio ULTIMA NOVEDAD");
  this.ConexMarca.getMarcas().subscribe(
    res=>{
      console.log(res)
      this.ListaMarca=<any>res;
           
    },
    err => console.log(err)
    
  );

  } 

  extraercombo(option:string){
    console.log(option);
  }

}
