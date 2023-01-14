import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar:boolean=true;
  footer:boolean=false;

  constructor() { }
 

  ngOnInit(): void {
  }

  ocultarcomponentes(){ 
    if(this.navbar)
    {
      this.navbar = true;
    }else{
      this.navbar = false;
    }
    
  }
}
