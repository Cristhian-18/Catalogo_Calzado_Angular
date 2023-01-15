import { Component, OnInit } from '@angular/core';
import { ConexMarcaService,Marca } from 'src/app/services/conexiones/conex-marca/conex-marca.service';
import { ConexProductosService, Producto } from 'src/app/services/conexiones/conex-productos/conex-productos.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  detalle:any={};
  
  cargar:any={
    
      pk_id_producto:0,
      codigo_producto:'', 
      img:'', 
      nombre_producto:'', 
      descripcion:'',
      fk_marca:'',
      modelo:'',
      genero:'',
      talla:'',
      costo:'',
      oferta:'',
      fk_nombre_categoria:''
    
    
  };



  ListaMarca:Marca[]=[];

  modal_admin:boolean  = false;

  constructor(private ConexProdcutoService:ConexProductosService, private ConexMarca:ConexMarcaService) {
    
    this.ConexProdcutoService.disparadorDetalle.subscribe(data=>{
      this.ConexProdcutoService.getUnProducto(data).subscribe(
       res=>{
         console.log(res)         
         this.cargar=<any>res;               
       },
       err => console.log('Hola')
      );
 
    })


   }

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

}
