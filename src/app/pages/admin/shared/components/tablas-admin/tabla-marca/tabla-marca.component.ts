import { Component, OnInit, Input } from '@angular/core';
import { ConexMarcaService,Marca } from 'src/app/services/conexiones/conex-marca/conex-marca.service';


@Component({
  selector: 'app-tabla-marca',
  templateUrl: './tabla-marca.component.html',
  styleUrls: ['./tabla-marca.component.css']
})
export class TablaMarcaComponent implements OnInit {

  @Input() dataEntrante:any;
  @Input() dataEntrante2:any;
  ListaMarca:Marca[]=[];
  index:number=0;
  
  constructor(private ConexProdcutoService:ConexMarcaService) { }
  ngOnInit(): void {
    this.listarMarcas();
  }
  listarMarcas()
{
  console.log("Servicio ULTIMA NOVEDAD");
  this.ConexProdcutoService.getMarcas().subscribe(
    res=>{
      console.log(res)
      this.ListaMarca=<any>res;
           
    },
    err => console.log(err)
    
  );

  } 

  eliminar(id:number){
    this.ConexProdcutoService.deletemarca(id).subscribe(
    res=>{
      console.log('Usuario Eliminado');
      this.listarMarcas();
    },
    err => console.log(err)
      
    );
  }
  getNombres(id:number){
    this.dataEntrante = id;
    console.log("ID: ",id);
    this.ConexProdcutoService.disparadorDetalle.emit(this.dataEntrante)
  } 
  getIndex(id2:number){
    this.index=id2;
    this.dataEntrante2 = id2;
    console.log("ID: ",id2);
    this.ConexProdcutoService.disparadorDetalle.emit(this.dataEntrante2)
  }
  enviar(){
    this.getIndex(this.ListaMarca.length+1);
  }
}
