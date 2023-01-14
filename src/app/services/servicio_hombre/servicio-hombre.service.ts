import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioHombreService {

  @Output() disparadorDetalle: EventEmitter<any> = new EventEmitter();

  private hombres:hombres[]=[
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fadidas%2Fadi_2%20Colors%20Available_12.jpg?alt=media&token=7453b096-093d-43f7-a87c-2f33b9c7f4bc",
      genero:'Hombres',
      nombre_producto:'Nike Phantom GT2',
      precio:'$1,299'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fnike%2FNike%20Legend%208%20Academy%20TF_10.jpg?alt=media&token=75b17752-89dd-4e86-a753-021f276365a5",
      genero:'Hombres',
      nombre_producto:'Nike Legend 8 Academy TF',
      precio:'$1,500'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fnike%2FNike%20Mercurial%20Vapor%2014%20Club%20TF_4.jpg?alt=media&token=814a2a8c-6431-4483-b454-1ac9a7ad384c",
      genero:'Hombres',
      nombre_producto:'Nike Mercurial Vapor 14 Club TF',
      precio:'$1,630'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fnike%2FNike%20Phantom%20GT%20Academy%20MG_12.jpg?alt=media&token=fdaa373a-4cb1-45de-9d6a-f01f98e91aca",
      genero:'Hombres',
      nombre_producto:'Nike Phantom GT Academy ',
      precio:'$1,100'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fnike%2FNike%20Phantom%20GT%20Academy%20TF_11.jpg?alt=media&token=d27ab467-d0fc-4dae-9618-24242859d267",
      genero:'Hombres',
      nombre_producto:'Nike Phantom GT Academy TF',
      precio:'$1,000'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fnike%2FNike%20Phantom%20GT%20Academy%20TF_6.jpg?alt=media&token=90540459-77f1-4164-931b-0f01c6b91edb",
      genero:'Hombres',
      nombre_producto:'Nike Phantom TF',
      precio:'$1,000'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fnike%2FNike%20Tiempo%20Legend%208%20Club%20TF_5.jpg?alt=media&token=ad3b854d-d1d4-499e-aee5-b95927b1440f",
      genero:'Hombres',
      nombre_producto:'Nike Tiempo Legend 8 Club',
      precio:'$1,000'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fhombres%2Fnike%2FNike_React_Metcon_Turbo_2.jpg?alt=media&token=c95b4f0a-0224-48ad-a92e-1788d2d1e95e",
      genero:'Hombres',
      nombre_producto:'Nike_React_Metcon_Turbo',
      precio:'$1,000'
    }
  ];

  gethombres()
  {return this.hombres};

  getheroesnombre(nombre:string):hombres[]{
    let hombres = this.gethombres();
    let hombre = hombres.filter(item =>item.nombre_producto==nombre)
    return hombre;
  }

  constructor() {
    console.log("servicio de hombre para usar..!");
   }
}
export interface hombres{
  img:string;
  genero:string;
  nombre_producto:string;
  precio:string;

};