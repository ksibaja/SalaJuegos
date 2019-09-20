import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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


  ngOnInit() {
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

  submitLogin() {
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        this.login();
        //login success
        //login success code here
        //redirect to home page
      }
      else {
        console.log('User login failed');
      }
    });

  }

  async login() {

    if(this.isSpacesEmpty()){


    } else {
      if(await this.verifyUser()) {
        window.location.href = "http://localhost:4200/memoria";
      }

    }
  }
  isSpacesEmpty() {
    if (this.Usuario.nativeElement.value == "") {
      Swal.fire({
        type: 'error',
        title: 'Usuario Vacío.',
        showConfirmButton: false,
        timer: 1500,
      });
      return true;
    } else if (this.Contraseña.nativeElement.value == "") {
      Swal.fire({
        type: 'error',
        title: 'Contraseña Vacía.',
        showConfirmButton: false,
        timer: 1500,
      });
      return true;
    }
    return false;
  }
  async verifyUser() {
    let user = this.Usuario.nativeElement.value;
    let password = this.Contraseña.nativeElement.value;

    //aqui va endpoint de inicio de sesion

    if (true) {
      await Swal.fire({
        type: 'success',
        title: 'Usuario Registrado',
        showConfirmButton: false,
        timer: 1500,
      });
      return true;
    } else {
      await Swal.fire({
        type: 'error',
        title: 'Usuario o contraseña no válidos',
        showConfirmButton: false,
        timer: 1500,
      })
      return false;

    }
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

}
