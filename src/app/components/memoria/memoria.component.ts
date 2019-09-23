import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { __await } from 'tslib';
import Swal from "sweetalert2";

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit {
  @ViewChild('Mensaje', {static: false}) Mensaje: ElementRef;

  memoria = [];
  imagenCarta = "/assets/Images/carta.png";
  cartas = [];
  indexAnterior = 999;
  jugador = [];
  pc = [];
  myTurn = true;

  //configuracion
  tamano = "4x4";
  modoJuego = "Fácil";

  constructor() {
  }

  ngOnInit() {
    if (this.tamano == "4x4") {
      this.cartas = [
        {imagen: "León", volteada: false, pareja: false}, {imagen: "Pajaro", volteada: false, pareja: false},
        {imagen: "Lobo", volteada: false, pareja: false}, {imagen: "Vaca", volteada: false, pareja: false},
        {imagen: "Jirafa", volteada: false, pareja: false}, {imagen: "Caballo", volteada: false, pareja: false},
        {imagen: "Canguro", volteada: false, pareja: false},{imagen: "Conejo", volteada: false, pareja: false},

        {imagen: "León", volteada: false, pareja: false}, {imagen: "Pajaro", volteada: false, pareja: false},
        {imagen: "Lobo", volteada: false, pareja: false}, {imagen: "Vaca", volteada: false, pareja: false},
        {imagen: "Jirafa", volteada: false, pareja: false}, {imagen: "Caballo", volteada: false, pareja: false},
        {imagen: "Canguro", volteada: false, pareja: false}, {imagen: "Conejo", volteada: false, pareja: false},
      ]
    } else if (this.tamano == "5x5") {
      this.cartas = [
        {imagen: "León", volteada: false, pareja: false}, {imagen: "Pajaro", volteada: false, pareja: false},
        {imagen: "Lobo", volteada: false, pareja: false}, {imagen: "Vaca", volteada: false, pareja: false},
        {imagen: "Jirafa", volteada: false, pareja: false}, {imagen: "Caballo", volteada: false, pareja: false},
        {imagen: "Canguro", volteada: false, pareja: false}, {imagen: "Conejo", volteada: false, pareja: false},
        {imagen: "Gato", volteada: false, pareja: false}, {imagen: "Gorila", volteada: false, pareja: false},
        {imagen: "Hamster", volteada: false, pareja: false}, {imagen: "Iguana", volteada: false, pareja: false},

        {imagen: "León", volteada: false, pareja: false}, {imagen: "Pajaro", volteada: false, pareja: false},
        {imagen: "Lobo", volteada: false, pareja: false}, {imagen: "Vaca", volteada: false, pareja: false},
        {imagen: "Jirafa", volteada: false, pareja: false}, {imagen: "Caballo", volteada: false, pareja: false},
        {imagen: "Canguro", volteada: false, pareja: false}, {imagen: "Conejo", volteada: false, pareja: false},
        {imagen: "Gato", volteada: false, pareja: false}, {imagen: "Gorila", volteada: false, pareja: false},
        {imagen: "Hamster", volteada: false, pareja: false}, {imagen: "Iguana", volteada: false, pareja: false},
      ]
    } else if (this.tamano == "6x6") {
      this.cartas = [
        {imagen: "León", volteada: false, pareja: false}, {imagen: "Pajaro", volteada: false, pareja: false},
        {imagen: "Lobo", volteada: false, pareja: false}, {imagen: "Vaca", volteada: false, pareja: false},
        {imagen: "Jirafa", volteada: false, pareja: false}, {imagen: "Caballo", volteada: false, pareja: false},
        {imagen: "Canguro", volteada: false, pareja: false}, {imagen: "Conejo", volteada: false, pareja: false},
        {imagen: "Gato", volteada: false, pareja: false}, {imagen: "Gorila", volteada: false, pareja: false},
        {imagen: "Hamster", volteada: false, pareja: false}, {imagen: "Iguana", volteada: false, pareja: false},
        {imagen: "Lince", volteada: false, pareja: false}, {imagen: "Oso", volteada: false, pareja: false},
        {imagen: "Panda", volteada: false, pareja: false}, {imagen: "Suricata", volteada: false, pareja: false},
        {imagen: "Triceratop", volteada: false, pareja: false}, {imagen: "Perro", volteada: false, pareja: false},

        {imagen: "León", volteada: false, pareja: false}, {imagen: "Pajaro", volteada: false, pareja: false},
        {imagen: "Lobo", volteada: false, pareja: false}, {imagen: "Vaca", volteada: false, pareja: false},
        {imagen: "Jirafa", volteada: false, pareja: false}, {imagen: "Caballo", volteada: false, pareja: false},
        {imagen: "Canguro", volteada: false, pareja: false}, {imagen: "Conejo", volteada: false, pareja: false},
        {imagen: "Gato", volteada: false, pareja: false}, {imagen: "Gorila", volteada: false, pareja: false},
        {imagen: "Hamster", volteada: false, pareja: false}, {imagen: "Iguana", volteada: false, pareja: false},
        {imagen: "Lince", volteada: false, pareja: false}, {imagen: "Oso", volteada: false, pareja: false},
        {imagen: "Panda", volteada: false, pareja: false}, {imagen: "Suricata", volteada: false, pareja: false},
        {imagen: "Triceratop", volteada: false, pareja: false}, {imagen: "Perro", volteada: false, pareja: false},
      ];
    }
    this.cartas = this.listRandom(this.cartas,500);
  }


  async selectedCard(i) {
    //voltear carta

    if (this.myTurn) {
      this.cartas[i].volteada = true; // carta volteada
      if (this.indexAnterior != 999) { //ya seleciono una carta
        if (this.cartas[this.indexAnterior].imagen == this.cartas[i].imagen) { //carta anterior es igual a actual
          console.log("iguales");
          this.cartas[i].pareja = true;
          this.cartas[this.indexAnterior].pareja = true;
          this.jugador.push(this.cartas[i]);
          this.jugador.push(this.cartas[this.indexAnterior]);

          console.log(this.jugador);
          this.indexAnterior = 999;

        } else {
          this.myTurn = false;
          await this.delay(1500);
          this.cartas[i].volteada = false;
          this.cartas[this.indexAnterior].volteada = false;
          if (this.modoJuego == '1v1') {
            //espera al otro jugador
          } else {
            this.rememberCard(i); //guarda la carta selecionada en memoria
            this.indexAnterior = 999; //no tener indice de carta anterior
            return await this.selectedCard(0);
          }
          this.indexAnterior = 999; //no tener indice de carta anterior

        }
      } else {
        this.indexAnterior = i; //da indice de la primer carta volteada
      }
    } else {
      this.playComputer();
    }
    if (this.isComplete()) {
      await this.victory();
    }


  }

  //guarda la memria para dificultad
  rememberCard(i) {
    if (this.modoJuego == 'Medio') {

    } else if (this.modoJuego == 'Difícil') {
      this.memoria.push(this.cartas[i].volteada);
      this.memoria.push(this.cartas[this.indexAnterior].volteada);
    }
  }

  getImage(nombre) {
    return "/assets/Images/" + nombre + ".png";
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("waiting..."));
  }

  sendMessage() {
    let mensaje = this.Mensaje.nativeElement.value;
    //envia el mensaje
    this.Mensaje.nativeElement.value = "";
  }

  async playComputer() {
    if (this.modoJuego == 'Fácil') {
      let n = this.generateIndex();
      this.cartas[n].volteada = true;
      let m = this.generateIndex();
      this.cartas[m].volteada = true;
      await this.delay(1500);
      if (this.cartas[n].imagen == this.cartas[m].imagen) {
        this.cartas[n].pareja = true;
        this.cartas[m].pareja = true;
        this.pc.push(this.cartas[n]);
        return await this.playComputer();
      } else {
        this.cartas[n].volteada = false;
        this.cartas[m].volteada = false;
        this.myTurn = true;
        return;
      }
    } else if (this.modoJuego == 'Medio') {

    } else {

    }
  }
  getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  isComplete(){
    for(let i = 0;i<this.cartas.length;i++)
      if(!this.cartas[i].pareja)
        return false;
    return true;
  }
  async noIsTurn(){
    await Swal.fire({
      type: 'error',
      title: 'No es tu turno.',
      showConfirmButton: false,
      timer: 1000,
      position:"center-right"
    });
  }
  async victory(){
    await Swal.fire({
      type: 'success',
      title: 'Felicidades el ganador es: '+this.getGanador(),
      showConfirmButton: true,
    });
  }
   generateIndex(){
    let rand=true;
    let nAnt=999;
    let n;
    while(rand) {
      n = this.getRandom(0, this.cartas.length);
      if(nAnt != n){
        if (!this.cartas[n].volteada) {
          rand = false;
        }
      }
      nAnt=n;
    }
    return n;
  }
  listRandom(list, random) {
    console.log("entro");
    let i = 0;
    while(i<random){
      let card = list.pop();
      let n = this.getRandom(0, list.length);
      list.splice(n,0, card);
      console.log(list);
      i++;
    }
    return list;
  }
  getGanador(){
    if(this.jugador.length==this.pc.length){
      return "Empate";
    }else if(this.jugador.length<this.pc.length){
      return "Computador";
    }
    else{
      return "Jugador"
    }
  }
}
