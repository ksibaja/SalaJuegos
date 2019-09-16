import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  gameForm: FormGroup;
  nlineaForm: FormGroup;
  memoryForm: FormGroup;

  games = [
    "N-Linea",
    "Memoria"
  ]

  dataGames = [
    { cantJuegos: ["1", "2", "3", "4", "5"] },
    { tamano: ["4x4", "6x6", "8x8", "10x10", "12x12"] },
    { modo: ["Fácil", "Medio", "Difícil"] },
    { cantFichas: ["3", "4", "5", "6"] }
  ]

  constructor(public formBuilder: FormBuilder, private router: Router) {
    this.gameForm = this.formBuilder.group({
      gameControl: ['N-Linea']
    });
    this.nlineaForm = this.formBuilder.group({
      cantControl: ['1'],
      tamControl: ['4x4'],
      modoControl: ['Fácil'],
      cantFichaControl: ['3']
    });
    this.memoryForm = this.formBuilder.group({
      cantControl: ['1'],
      tamControl: ['4x4'],
      modoControl: ['Fácil'],
    })
  }

  ngOnInit() {}

  play() {
    //alert("NO DISPONIBLE EN ESTE MOMENTO!!!");
    console.log(this.gameForm.controls['gameControl'].value)
    if (this.gameForm.controls['gameControl'].value == 'Memoria') {
      this.router.navigate(['memoria']);
    } else {
      this.router.navigate(['/n-linea']);
    }
  }

  config() {
    if (this.gameForm.controls['gameControl'].value == 'Memoria') {
      document.getElementById("openMemoria").click();
    } else {
      document.getElementById("openNlinea").click();
    }
  }

  logOut() {
    this.router.navigate(['/login']);
    //window.location.href = "/login";
  }

  dataModalNlinea() {
    console.log(this.nlineaForm.controls['cantControl'].value);
    console.log(this.nlineaForm.controls['tamControl'].value);
    if (this.nlineaForm.controls['modoControl'].value == "1") {
      console.log("1v1");
    } else {
      console.log(this.nlineaForm.controls['modoControl'].value);
    }
    console.log(this.nlineaForm.controls['cantFichaControl'].value);
  }

  dataModalMemory() {
    console.log(this.memoryForm.controls['cantControl'].value);
    console.log(this.memoryForm.controls['tamControl'].value);
    if (this.memoryForm.controls['modoControl'].value == "1") {
      console.log("1v1");
    } else {
      console.log(this.memoryForm.controls['modoControl'].value);
    }
  }

}
