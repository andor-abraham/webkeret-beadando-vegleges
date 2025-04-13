import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './oldalak/index/index.component';
import { CsapatComponent } from './oldalak/csapat/csapat.component'; 
import { MenetrendComponent } from './oldalak/menetrend/menetrend.component';
import { ProfilComponent } from './oldalak/profil/profil.component';
import { AuthGuard } from './shared/services/auth.guard';
import { RegisztComponent } from './oldalak/regiszt/regiszt.component';
import { LoginComponent } from './oldalak/login/login.component';

const routes: Routes = [{ path: '', redirectTo: '/index', pathMatch: 'full' },
{ path: 'index', component: IndexComponent },
{ path: 'csapat', component: CsapatComponent,},
{ path: 'menetrend', component: MenetrendComponent,canActivate: [AuthGuard]  },
{ path: 'login', component: LoginComponent },
{ path: 'regiszt', component: RegisztComponent },
{ path: 'profil', component: ProfilComponent,canActivate: [AuthGuard]  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
