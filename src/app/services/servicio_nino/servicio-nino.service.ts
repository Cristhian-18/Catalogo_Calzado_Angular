import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class  ServicioNinoService {

  private ninos:ninos[]=[
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fadidas%2Fadi_2%20Colors%20Available_12.jpg?alt=media&token=7453b096-093d-43f7-a87c-2f33b9c7f4bc",
      genero:'Niños',
      nombre_producto:'Nike Phantom GT2',
      precio:'$1,299'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fadidas%2Fadi_boost_running_sportswear_lifestyle_7.jpg?alt=media&token=fa8118ca-e36c-49d2-a00d-69272dbf1f98",
      genero:'Niño',
      nombre_producto:'Nike Phantom GT3',
      precio:'$1,500'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fadidas%2Fadi_eq21_run1.jpg?alt=media&token=d589c34d-8bf7-429f-a8b0-6d633888c0ad",
      genero:'Niño',
      nombre_producto:'Nike Phantom GT4',
      precio:'$1,630'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fadidas%2Fadi_eq21_run1.jpg?alt=media&token=d589c34d-8bf7-429f-a8b0-6d633888c0ad",
      genero:'Niño',
      nombre_producto:'Nike Phantom GT5',
      precio:'$1,100'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fadidas%2Fadi_2%20Colors%20Available_12.jpg?alt=media&token=7453b096-093d-43f7-a87c-2f33b9c7f4bc",
      genero:'Niño',
      nombre_producto:'Nike Phantom GT6',
      precio:'$1,000'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fadidas%2Fadi_2%20Colors%20Available_12.jpg?alt=media&token=7453b096-093d-43f7-a87c-2f33b9c7f4bc",
      genero:'Niño',
      nombre_producto:'Nike Phantom GT6',
      precio:'$1,000'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fadidas%2Fadi_2%20Colors%20Available_12.jpg?alt=media&token=7453b096-093d-43f7-a87c-2f33b9c7f4bc",
      genero:'Niño',
      nombre_producto:'Nike Phantom GT6',
      precio:'$1,000'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fadidas%2Fadi_2%20Colors%20Available_12.jpg?alt=media&token=7453b096-093d-43f7-a87c-2f33b9c7f4bc",
      genero:'Niño',
      nombre_producto:'Nike Phantom GT6',
      precio:'$1,000'
    }
  ];
  getninos()
  {return this.ninos};

  constructor() {
    console.log("servicio de niño para usar..!");
   }
}
export interface ninos{
  img:string;
  genero:string;
  nombre_producto:string;
  precio:string;

};
