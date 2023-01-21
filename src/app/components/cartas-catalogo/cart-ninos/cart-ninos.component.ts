import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cart-ninos',
  templateUrl: './cart-ninos.component.html',
  styleUrls: ['./cart-ninos.component.css']
})
export class CartNinosComponent implements OnInit {

  info_modal:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  abrirmodal(){
    this.info_modal = true;
  }

}
