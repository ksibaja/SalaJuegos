import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SalaComponent } from './components/sala/sala.component';
import { MemoriaComponent } from './components/memoria/memoria.component';
import { NLineaComponent } from './components/n-linea/n-linea.component';
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalaComponent,
    MemoriaComponent,
    NLineaComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES), FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
