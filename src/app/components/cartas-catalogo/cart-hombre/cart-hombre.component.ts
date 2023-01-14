import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioHombreService,hombres } from '../../../services/servicio_hombre/servicio-hombre.service';

@Component({
  selector: 'app-cart-hombre',
  templateUrl: './cart-hombre.component.html',
  styleUrls: ['./cart-hombre.component.css']
})
export class CartHombreComponent implements OnInit {

  @Input() dataEntrante:any;

  hombres:hombres[]=[];
  info_modal:boolean=false;

  constructor(private _serviciohombre:ServicioHombreService,private router:Router) { }

  ngOnInit(){
    this.hombres=this._serviciohombre.gethombres()
  }

  getNombres(nombre:string){
    this.dataEntrante = nombre;
    this._serviciohombre.disparadorDetalle.emit(this.dataEntrante)
  }

  abrirmodal(){
  this.info_modal = true;
}

}
