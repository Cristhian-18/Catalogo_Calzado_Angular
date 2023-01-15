import { Component, OnInit } from '@angular/core';
import { ConexMarcaService,Marca } from 'src/app/services/conexiones/conex-marca/conex-marca.service';


@Component({
  selector: 'app-registrar-marca',
  templateUrl: './registrar-marca.component.html',
  styleUrls: ['./registrar-marca.component.css']
})
export class RegistrarMarcaComponent implements OnInit {


  marca:Marca={
      id_Marca:0,
      nombre:'',
      descripcion:''
  } 
  ListaMarca:Marca[]=[];
  id:number=0;
  constructor( private conexion:ConexMarcaService) {     
    this.ListaMarca =<any>  conexion.getMarcas();    
  }
  ngOnInit(): void {
  }
  
  agregarProducto(){
  
    
    this.marca.id_Marca = (this.id+1)
    console.log(this.marca);
    this.conexion.addMarca(this.marca).subscribe();
    
  
  }


}
