import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';


import { ListarComponent } from './component/listar/listar.component';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoginComponent } from './component/login/login.component';
import { CadastrarPalavraComponent } from './component/cadastrar-palavra/cadastrar-palavra.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { ListarPalavraComponent } from './component/listar-palavra/listar-palavra.component';
import { UsuarioResolver } from './resolver/usuario.resolver';


export const firebaseConfig = {
  apiKey: "AIzaSyBjV_e-LKs3UF7qp9BGkgnP2Cxu2_ih0bM",
  authDomain: "palavrinhas-unicap.firebaseapp.com",
  databaseURL: "https://palavrinhas-unicap.firebaseio.com",
  projectId: "palavrinhas-unicap",
  storageBucket: "palavrinhas-unicap.appspot.com",
  messagingSenderId: "582245057284"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarComponent,
    LoginComponent,
    CadastrarPalavraComponent,
    TopbarComponent,
    ListarPalavraComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,

    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule

  ],
  providers: [UsuarioResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
