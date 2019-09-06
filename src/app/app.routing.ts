import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SalaComponent } from './components/sala/sala.component';
import { NLineaComponent } from './components/n-linea/n-linea.component';
import { MemoriaComponent } from './components/memoria/memoria.component';

export const ROUTES: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'sala', component: SalaComponent
  },
  {
    path: 'n-linea', component: NLineaComponent
  },
  {
    path: 'memoria', component: MemoriaComponent
  },
];