import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioMujerService {

    private mujeres:mujeres[]=[
      {
        img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fmujeres%2Fadidas%2FTENIS%20ADIDAS%20GRAND%20COURT%20BASE%20BEYOND%20-Nr8.jpg?alt=media&token=35391be2-0282-4765-9870-6cfde77d4b70",
        genero:'mujeres',
        nombre_producto:'TENIS ADIDAS GRAND COURT BASE BEYOND',
        precio:'$1,299'
      },
      {
        img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fmujeres%2Fadidas%2FTENIS%20ADISTAR_10.jpg?alt=media&token=41ca0b66-c224-4986-a4c0-666aa65fd044",
        genero:'muejeres',
        nombre_producto:'TENIS ADISTAR 10',
        precio:'$1,500'
      },
      {
        img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fmujeres%2Fadidas%2FTENIS%20DE%20SENDERISMO%20TERREX%20AX4%20PRIMEGREEN_5.jpg?alt=media&token=afe8c0b0-0e3a-4f3e-af9a-3027c09b5717",
        genero:'mujeres',
        nombre_producto:'TENIS DE SENDERISMO TERREX AX4 PRIMEGREEN 5',
        precio:'$1,630'
      },
      {
        img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fmujeres%2Fadidas%2FTENIS%20EQ21%20RUN_7.jpg?alt=media&token=88e0521a-d940-4f48-88cf-1f4f4725538a",
        genero:'mujeres',
        nombre_producto:'TENIS EQ21 RUN',
        precio:'$1,100'
      },
      {
        img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fmujeres%2Fadidas%2FTENIS%20LITE%20RACER%203.0%20-%20Nr5.jpg?alt=media&token=8f9f50fc-275b-453c-a386-47df40abc3c7",
        genero:'mujeres',
        nombre_producto:'TENIS LITE RACER',
        precio:'$1,000'
      },
      {
        img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fmujeres%2Fadidas%2FTENIS%20LITE%20RACER%20ADAPT%204.0%20CLOUDFOAM%20LIFESTYLE%20CALCE%20F%C3%81CIL_8.jpg?alt=media&token=7621ef5b-8442-4eba-9749-819936b4f225",
        genero:'mujeres',
        nombre_producto:'TENIS LITE RACER ADAPT',
        precio:'$1,000'
      },
      {
        img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fmujeres%2Fadidas%2FTENIS%20ULTRABOOST%20WEB%20DNA%20RUNNING%20SPORTSWEAR%20LIFESTYLE_6.jpg?alt=media&token=fd3f796d-0348-4a43-a842-9f549c565c1b",
        genero:'mujeres',
        nombre_producto:'TENIS ULTRABOOST WEB',
        precio:'$1,000'
      },
      {
        img:"https://firebasestorage.googleapis.com/v0/b/proyectcatalogozapatos.appspot.com/o/Imagenes%2FCatalogo%2Fmujeres%2Fadidas%2FTENIS%20ULTRABOOST%20DNA%20XXII%20LIFESTYLE%20RUNNING%20SPORTSWEAR%20CAPSULE%20COLLECTION_11.jpg?alt=media&token=7c2c8b20-b627-4a4d-89d1-e0a29f017fbe",
        genero:'mujeres',
        nombre_producto:'TENIS ULTRABOOST DNA XXII',
        precio:'$1,000'
      }
    ];
    gethombres()
  {return this.mujeres};

  constructor() {
    console.log("servicio de hombre para usar..");
   }
}
export interface mujeres{
  img:string;
  genero:string;
  nombre_producto:string;
  precio:string;
};
