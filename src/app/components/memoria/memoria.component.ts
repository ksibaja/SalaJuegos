import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { __await } from 'tslib';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit {
  @ViewChild('Mensaje',{static:false}) Mensaje:ElementRef;

  imagenCarta = "/assets/Images/carta.png";
  cartas = [
    { imagen: "León", volteada: false, pareja: false }, { imagen: "Pajaro", volteada: false, pareja: false },
    { imagen: "Pajaro", volteada: false, pareja: false }, { imagen: "León", volteada: false, pareja: false },
    { imagen: "Lobo", volteada: false, pareja: false }, { imagen: "Vaca", volteada: false, pareja: false },
    { imagen: "Jirafa", volteada: false, pareja: false }, { imagen: "Lobo", volteada: false, pareja: false },
    { imagen: "Perro", volteada: false, pareja: false }, { imagen: "Jirafa", volteada: false, pareja: false },
    { imagen: "Perro", volteada: false, pareja: false }, { imagen: "Vaca", volteada: false, pareja: false },
    { imagen: "León", volteada: false, pareja: false }, { imagen: "Pajaro", volteada: false, pareja: false },
    { imagen: "Pajaro", volteada: false, pareja: false }, { imagen: "León", volteada: false, pareja: false },
    { imagen: "Lobo", volteada: false, pareja: false }, { imagen: "Vaca", volteada: false, pareja: false },
    { imagen: "Jirafa", volteada: false, pareja: false }, { imagen: "Lobo", volteada: false, pareja: false },
    { imagen: "Perro", volteada: false, pareja: false }, { imagen: "Jirafa", volteada: false, pareja: false },
    { imagen: "Perro", volteada: false, pareja: false }, { imagen: "Vaca", volteada: false, pareja: false },
    { imagen: "León", volteada: false, pareja: false }, { imagen: "Pajaro", volteada: false, pareja: false },
    { imagen: "Pajaro", volteada: false, pareja: false }, { imagen: "León", volteada: false, pareja: false },
    { imagen: "Lobo", volteada: false, pareja: false }, { imagen: "Vaca", volteada: false, pareja: false },
    { imagen: "León", volteada: false, pareja: false }, { imagen: "Pajaro", volteada: false, pareja: false },
    { imagen: "Pajaro", volteada: false, pareja: false }, { imagen: "León", volteada: false, pareja: false },
    { imagen: "Lobo", volteada: false, pareja: false }, { imagen: "Vaca", volteada: false, pareja: false },

  ];
  indexAnterior = 999;

  //configuracion
  tamano="5x5";
  modoJuego="Fácil";
  constructor() { }

  ngOnInit() {

  }
  async selectedCard(i) {
    if (this.cartas[i].volteada) {//Volver la carta boca abajo
      if (!this.cartas[i].pareja) {
        this.cartas[i].volteada = false;
        this.indexAnterior = 999;
      }
    }
    else { //voltear carta
      this.cartas[i].volteada = true;

      if (this.indexAnterior != 999) {
        if (this.cartas[this.indexAnterior].imagen == this.cartas[i].imagen) {
          console.log("iguales")
          this.cartas[i].pareja = true;
          this.cartas[this.indexAnterior].pareja = true;
          this.indexAnterior = 999;

        }
        else {
          await this.delay(1000);
          console.log("diferentes");
          this.cartas[i].volteada = false;
          this.cartas[this.indexAnterior].volteada = false;
          this.indexAnterior = 999;
        }
      }
      else {
        this.indexAnterior = i;
      }
    }
    console.log(this.cartas);


  }
  getImage(nombre) {
    return "/assets/Images/" + nombre + ".png";
  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }
  sendMessage(){
    let mensaje = this.Mensaje.nativeElement.value;

    //envia el mensaje
    this.Mensaje.nativeElement.value="";


  }
}
