import {Component, ElementRef, OnInit, ViewChild,NgZone} from '@angular/core';
import { Router } from '@angular/router';

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
  mensajes = [
    'Hola como estas estoy probando el tañamano con texto extremadamanete largo para pruebas'
  ];
  imagenCarta = "/assets/Images/carta.png";
  cartas = [];
  indexAnterior = 999;
  jugador = [];
  pc = [];
  myTurn = true;

  //configuracion
  tamano = "6x6";
  modoJuego = "Medio";

  constructor(private ngZone: NgZone,private router: Router) {

  }

  ngOnInit() {

    if (this.tamano == "4x4") {
      this.cartas = [
        {id: 1, imagen: "León", volteada: false, pareja: false}, {id: 2,imagen: "Pajaro", volteada: false, pareja: false},
        {id: 3,imagen: "Lobo", volteada: false, pareja: false}, {id: 4,imagen: "Vaca", volteada: false, pareja: false},
        {id: 5,imagen: "Jirafa", volteada: false, pareja: false}, {id: 6,imagen: "Caballo", volteada: false, pareja: false},
        {id: 7,imagen: "Canguro", volteada: false, pareja: false},{id: 8,imagen: "Conejo", volteada: false, pareja: false},

        {id: 9,imagen: "León", volteada: false, pareja: false}, {id: 10,imagen: "Pajaro", volteada: false, pareja: false},
        {id: 11,imagen: "Lobo", volteada: false, pareja: false}, {id: 12,imagen: "Vaca", volteada: false, pareja: false},
        {id: 13,imagen: "Jirafa", volteada: false, pareja: false}, {id: 14,imagen: "Caballo", volteada: false, pareja: false},
        {id: 15,imagen: "Canguro", volteada: false, pareja: false}, {id: 16,imagen: "Conejo", volteada: false, pareja: false},
      ]
    } else if (this.tamano == "5x5") {
      this.cartas = [
        {id: 1,imagen: "León", volteada: false, pareja: false}, {id: 2,imagen: "Pajaro", volteada: false, pareja: false},
        {id: 3,imagen: "Lobo", volteada: false, pareja: false}, {id: 4,imagen: "Vaca", volteada: false, pareja: false},
        {id: 5,imagen: "Jirafa", volteada: false, pareja: false}, {id: 6,imagen: "Caballo", volteada: false, pareja: false},
        {id: 7,imagen: "Canguro", volteada: false, pareja: false}, {id: 8,imagen: "Conejo", volteada: false, pareja: false},
        {id: 9,imagen: "Gato", volteada: false, pareja: false}, {id: 10,imagen: "Gorila", volteada: false, pareja: false},
        {id: 11,imagen: "Hamster", volteada: false, pareja: false}, {id: 12,imagen: "Iguana", volteada: false, pareja: false},

        {id: 13,imagen: "León", volteada: false, pareja: false}, {id: 14,imagen: "Pajaro", volteada: false, pareja: false},
        {id: 15,imagen: "Lobo", volteada: false, pareja: false}, {id: 16,imagen: "Vaca", volteada: false, pareja: false},
        {id: 17,imagen: "Jirafa", volteada: false, pareja: false}, {id: 18,imagen: "Caballo", volteada: false, pareja: false},
        {id: 19,imagen: "Canguro", volteada: false, pareja: false}, {id: 20,imagen: "Conejo", volteada: false, pareja: false},
        {id: 21,imagen: "Gato", volteada: false, pareja: false}, {id: 22,imagen: "Gorila", volteada: false, pareja: false},
        {id: 23,imagen: "Hamster", volteada: false, pareja: false}, {id: 24,imagen: "Iguana", volteada: false, pareja: false},
      ]
    } else if (this.tamano == "6x6") {
      this.cartas = [
        {id: 1,imagen: "León", volteada: false, pareja: false}, {id: 2,imagen: "Pajaro", volteada: false, pareja: false},
        {id: 3,imagen: "Lobo", volteada: false, pareja: false}, {id: 4,imagen: "Vaca", volteada: false, pareja: false},
        {id: 5,imagen: "Jirafa", volteada: false, pareja: false}, {id: 6,imagen: "Caballo", volteada: false, pareja: false},
        {id: 7,imagen: "Canguro", volteada: false, pareja: false}, {id: 8,imagen: "Conejo", volteada: false, pareja: false},
        {id: 9,imagen: "Gato", volteada: false, pareja: false}, {id: 10,imagen: "Gorila", volteada: false, pareja: false},
        {id: 11,imagen: "Hamster", volteada: false, pareja: false}, {id: 12,imagen: "Iguana", volteada: false, pareja: false},
        {id: 13, imagen: "Lince", volteada: false, pareja: false}, {id: 14,imagen: "Oso", volteada: false, pareja: false},
        {id: 15,imagen: "Panda", volteada: false, pareja: false}, {id: 16,imagen: "Suricata", volteada: false, pareja: false},
        {id: 17,imagen: "Triceratop", volteada: false, pareja: false}, {id: 18,imagen: "Perro", volteada: false, pareja: false},

        {id: 19,imagen: "León", volteada: false, pareja: false}, {id: 20,imagen: "Pajaro", volteada: false, pareja: false},
        {id: 21,imagen: "Lobo", volteada: false, pareja: false}, {id: 22,imagen: "Vaca", volteada: false, pareja: false},
        {id: 23,imagen: "Jirafa", volteada: false, pareja: false}, {id: 24,imagen: "Caballo", volteada: false, pareja: false},
        {id: 25,imagen: "Canguro", volteada: false, pareja: false}, {id: 26,imagen: "Conejo", volteada: false, pareja: false},
        {id: 27,imagen: "Gato", volteada: false, pareja: false}, {id: 28,imagen: "Gorila", volteada: false, pareja: false},
        {id: 29,imagen: "Hamster", volteada: false, pareja: false}, {id: 30,imagen: "Iguana", volteada: false, pareja: false},
        {id: 31,imagen: "Lince", volteada: false, pareja: false}, {id: 32,imagen: "Oso", volteada: false, pareja: false},
        {id: 33,imagen: "Panda", volteada: false, pareja: false}, {id: 34,imagen: "Suricata", volteada: false, pareja: false},
        {id: 35,imagen: "Triceratop", volteada: false, pareja: false}, {id: 36,imagen: "Perro", volteada: false, pareja: false},
      ];
    }
    this.cartas = this.listRandom(this.cartas,500);
  }


  async selectedCard(i) {
    //voltear carta

    if (this.myTurn) {
     console.log("miturn") ;
      await this.playJugador(i);

    } else {
      console.log("noturn") ;
      this.playComputer();
    }
    if (this.isComplete()) {
      await this.victory();
    }


  }

  //guarda la memria para dificultad
  async rememberCard(i) {
    if (this.modoJuego == 'Medio') {
      let save=this.getRandom(0, 2);
      if(save==0){
        if(await !this.isIDinMemoria(this.cartas[i])) {
          this.memoria.push(this.cartas[i]);
        }
      }else if(save==1){
        if (await !this.isIDinMemoria(this.cartas[this.indexAnterior])) {
          this.memoria.push(this.cartas[this.indexAnterior]);
        }
      }
    } else if (this.modoJuego == 'Dificil') {
      if(await !this.isIDinMemoria(this.cartas[i])) {
        this.memoria.push(this.cartas[i]);
      }
      if (await !this.isIDinMemoria(this.cartas[this.indexAnterior])) {
        this.memoria.push(this.cartas[this.indexAnterior]);
      }

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
    this.mensajes.push(mensaje);
    if(this.mensajes.length==9){
      this.mensajes.splice(0,1);
    }
    this.Mensaje.nativeElement.value = "";
  }
  async playJugador(i){
    this.cartas[i].volteada = true; // carta volteada
    if (this.indexAnterior != 999) { //ya seleciono una carta
      if(i!=this.indexAnterior) {
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
            await this.rememberCard(i); //guarda la carta selecionada en memoria
            this.indexAnterior = 999; //no tener indice de carta anterior
            console.log("select");
            return await this.selectedCard(0);
          }
          this.indexAnterior = 999; //no tener indice de carta anterior

        }
      }
      else{
        await this.sameCard();
      }
    } else {
      this.indexAnterior = i;
    }
  }
  async playComputer() {
    console.log("cartas : "+this.cartas);
    console.log("memria : "+this.memoria);
    if (this.modoJuego == 'Fácil') {
      let n = await this.generateIndex(999);
      this.cartas[n].volteada = true;
      let m = await this.generateIndex(n);
      this.cartas[m].volteada = true;
      await this.delay(1500);
      if (this.cartas[n].imagen == this.cartas[m].imagen) {
        this.cartas[n].pareja = true;
        this.cartas[m].pareja = true;
        this.pc.push(this.cartas[n]);
        this.pc.push(this.cartas[m]);
        return await this.playComputer();
      } else {
        this.cartas[n].volteada = false;
        this.cartas[m].volteada = false;
        this.myTurn=true;
        return;
      }
    } else {
      if(await this.verificarPares()){
        return await this.playComputer();
      }
      else{
        let n = await this.generateIndex(999);
        this.cartas[n].volteada=true;
        this.indexAnterior=n;
        if(await this.isOtherPar(n)){
          return await this.playComputer();
        }else{
          let m = await this.generateIndex(n);
          this.cartas[m].volteada=true;
          await this.rememberCard(m);
          if(this.cartas[n].imagen==this.cartas[m].imagen){
            this.cartas[n].pareja=true;
            this.cartas[m].pareja=true;
            this.pc.push(this.cartas[n]);
            this.pc.push(this.cartas[m]);
            await this.delay(1500);
            this.deleteMemory(this.cartas[n]);//elimina todas las cartas ocn esa imagen de memoria
            return await this.playComputer();
          }else{
            await this.delay(1500);
            this.myTurn=true;
            this.cartas[n].volteada=false;
            this.cartas[m].volteada=false;
            this.indexAnterior=999;
            return;
          }

          return;
        }
      }
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
  async sameCard(){
    return await Swal.fire({
      type: 'info',
      title: 'No seleccione la misma carta',
      showConfirmButton: true,
    });
  }
  async victory(){
    await Swal.fire({
      type: 'success',
      title: 'Felicidades el ganador es: ' + this.getGanador(),
      showConfirmButton: true,
    });
  }
   generateIndex(numAnt){
      let rand = true;
      let nAnt = numAnt;
      let n;
      while (rand) {
        n = this.getRandom(0, this.cartas.length-1);
        if (nAnt != n) {
          if (!this.cartas[n].volteada) {
            rand = false;
          }
        }
        nAnt = n;
      }
      return n;
  }
  listRandom(list, random) {
    let i = 0;
    while(i<random){
      let card = list.pop();
      let n = this.getRandom(0, list.length);
      list.splice(n,0, card);
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
  goSala(){
    this.ngZone.run(async () => this.router.navigate(['/sala'])).then();
  }
  async verificarPares(){
    //Busca si en los volteados hay pares
    for(let i = 0;i<this.memoria.length;i++){
      for(let j = i+1; j<this.memoria.length;j++){
        if(this.memoria[i].imagen==this.memoria[j].imagen && !this.memoria[i].pareja && !this.memoria[j].pareja){
          this.memoria[i].volteada=true;
          this.memoria[j].volteada=true;
          this.memoria[i].pareja=true;
          this.memoria[j].pareja=true;
          this.pc.push(this.cartas[i]);
          this.pc.push(this.cartas[j]);
          await this.delay(1500);
          return true;
        }
      }

    }
    return false;
  }
  isIDinMemoria(carta){//false es que si esta
    //true ees que no está
    for (let i = 0;i<this.memoria.length;i++){
      if(this.memoria[i].id==carta.id){
        return true;
      }
    }
    return false;
  }
  async isOtherPar(n){
    for (let i=0; i<this.memoria.length;i++ ){
      if(this.memoria[i].imagen==this.cartas[n].imagen && this.cartas[n].id!=this.memoria[i].id){
        this.memoria[i].volteada=true;
        this.memoria[i].pareja=true;
        this.cartas[n].pareja=true;
        this.pc.push(this.memoria[i]);
        this.pc.push(this.cartas[n]);
        await this.delay(1500);
        return true;
      }
    }
    return false;
  }
  deleteMemory(carta){
    for(let i=0;i<this.memoria.length;i++){
      if(carta.imagen==this.memoria[i].imagen){
        this.memoria.splice(i,1);
      }
    }
  }
}
