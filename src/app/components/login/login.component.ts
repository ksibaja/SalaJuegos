import { Component, ElementRef, OnInit, ViewChild, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../shared/services/auth.service";
import { async } from '@angular/core/testing';

import Swal from 'sweetalert2';
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.loginForm.controls; }

  async onSubmit() {
    this.submitted = true;

    //if (await this.isSpacesEmpty()) { }
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    await this.login();
  }

  async login() {
    if (await this.verifyUser()) {
      this.ngZone.run(async () => this.router.navigate(['/sala'])).then();
    }

  }

  async isSpacesEmpty() {
    //console.log(this.loginForm.controls['email'].validator(''));
    if (this.loginForm.controls['email'].value == "") {
      await this.cardNotify('error', 'Usuario Vacío.', false);
      return true;
    } else if (this.loginForm.controls['password'].value == "") {
      await this.cardNotify('error', 'Contraseña Vacía.', false);
      return true;
    } else {
      return false;
    }
  }

  async verifyUser() {
    let user = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;

    //aqui va endpoint de inicio de sesion
    if (true) {
      await this.cardNotify('success', 'Usuario Registrado', false);
      return true;
    }
    else {
      await this.cardNotify('error', 'Usuario o contraseña no válidos', false);
      return false;
    }
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }
  async cardNotify(icono, mensaje, btnConfirmar) {
    await Swal.fire({
      type: icono,
      title: mensaje,
      showConfirmButton: btnConfirmar,
      timer: 1500,
    });
  }
}
