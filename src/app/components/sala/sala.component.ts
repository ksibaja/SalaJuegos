import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  jugar() {
    //alert("NO DISPONIBLE EN ESTE MOMENTO!!!");

  }

  salir() {
    window.location.href = "/login";
  }

  nlinea() {
    window.location.href = "/n-linea"
  }

  memory() {
    window.location.href = "/memoria"
  }

}
