import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './oldalak/index/index.component';
import { LoginComponent } from './oldalak/login/login.component';
import { RegisztComponent } from './oldalak/regiszt/regiszt.component';
import { ProfilComponent } from './oldalak/profil/profil.component';
import { MenetrendComponent } from './oldalak/menetrend/menetrend.component';

import { environment } from '../environments/environment';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { SzovegszinDirective } from './direktiva/szovegszin.directive';
import { CsapatComponent } from './oldalak/csapat/csapat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { PlayerCardComponent } from './component/player-card/player-card.component';
import { TabellaComponent } from './component/tabella/tabella.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SorszinezesDirective } from './direktiva/sorszinezes.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';






@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisztComponent,
    
    ProfilComponent,
    MenetrendComponent,
    CsapatComponent,
    PlayerCardComponent,
    TabellaComponent,
    UppercasePipe,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    AngularFireModule,
    MatFormFieldModule,
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,    
    MatInputModule,
    MatTableModule,MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,MatCardModule,
    MatListModule,
    
    MatFormFieldModule,MatProgressSpinnerModule,
    ReactiveFormsModule,SzovegszinDirective,SorszinezesDirective,
    AngularFireModule.initializeApp(environment.firebase),
    
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
