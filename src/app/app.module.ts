import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { routes } from './shared/routing/app.routing';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

// App components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SalaComponent } from './components/sala/sala.component';
import { MemoriaComponent } from './components/memoria/memoria.component';
import { NLineaComponent } from './components/n-linea/n-linea.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalaComponent,
    MemoriaComponent,
    NLineaComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes), 
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
