import { Routes } from '@angular/router';

import { LoginComponent } from '../../components/login/login.component';
import { SalaComponent } from '../../components/sala/sala.component';
import { NLineaComponent } from '../../components/n-linea/n-linea.component';
import { MemoriaComponent } from '../../components/memoria/memoria.component';

import { SecureInnerPagesGuard } from "../guard/secure-inner-pages.guard"; 
import { AuthGuard } from '../guard/auth.guard';

export const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'sala', component: SalaComponent, canActivate: [AuthGuard]
  },
  {
    path: 'n-linea', component: NLineaComponent
  },
  {
    path: 'memoria', component: MemoriaComponent
  },
];