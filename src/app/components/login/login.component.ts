import {Component, ElementRef, OnInit, ViewChild,NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { async } from '@angular/core/testing';

import Swal from 'sweetalert2';
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @ViewChild('Usuario',{static:false}) Usuario:ElementRef;
  @ViewChild('Contraseña',{static:false}) Contraseña:ElementRef;

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '384530158912115',
        cookie: true,
        xfbml: true,
        version: 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  get f() { return this.loginForm.controls; }

  async onSubmit() {
    this.submitted = true;
    await this.login();
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }


  }

  submitLogin() {
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        this.ngZone.run(async () => this.router.navigate(['/sala'])).then();
      }
      else {
        console.log('User login failed');
      }
    });

  }

  async login() {

    if(await this.isSpacesEmpty()){


    } else {
      if(await this.verifyUser()) {
        this.ngZone.run(async () => this.router.navigate(['/sala'])).then();
      }

    }
  }
  async isSpacesEmpty() {
    if (this.Usuario.nativeElement.value == "") {
      await this.cardNotify('error','Usuario Vacío.', false);
      return true;
    } else if (this.Contraseña.nativeElement.value == "") {
      await this.cardNotify('error','Contraseña Vacía.',false);
    }
    return false;
  }
  async verifyUser() {
    let user = this.Usuario.nativeElement.value;
    let password = this.Contraseña.nativeElement.value;

    //aqui va endpoint de inicio de sesion

    if (true) {
      await this.cardNotify('success','Usuario Registrado',false);
      return true;
    }
    // else {
    //   await this.cardNotify('error','Usuario o contraseña no válidos',false);
    //   return false;
    //
    // }
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }
  async cardNotify(icono, mensaje, btnConfirmar){
    await Swal.fire({
      type: icono,
      title: mensaje,
      showConfirmButton: btnConfirmar,
      timer: 1500,
    });
  }
}
