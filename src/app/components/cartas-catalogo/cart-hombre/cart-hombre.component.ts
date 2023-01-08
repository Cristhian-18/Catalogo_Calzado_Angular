import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-hombre',
  templateUrl: './cart-hombre.component.html',
  styleUrls: ['./cart-hombre.component.css']
})
export class CartHombreComponent implements OnInit {

  info_modal:boolean=false;

  constructor() { }

  ngOnInit(){
    
  }

  abrirmodal(){
  this.info_modal = true;
}

}
