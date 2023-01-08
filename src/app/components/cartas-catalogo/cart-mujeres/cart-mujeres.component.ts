import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-mujeres',
  templateUrl: './cart-mujeres.component.html',
  styleUrls: ['./cart-mujeres.component.css']
})
export class CartMujeresComponent implements OnInit {

  info_modal:boolean=false;

  constructor() { }

  ngOnInit(){
    
  }

  abrirmodal(){
  this.info_modal = true;
}

}
