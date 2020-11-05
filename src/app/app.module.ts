import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from "@angular/flex-layout";

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

import { AnagramaComponent } from './components/paginas/jueguitos/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './components/paginas/jueguitos/piedra-papel-tijera/piedra-papel-tijera.component';
import { AgilidadAritmeticaComponent } from './components/paginas/jueguitos/agilidad-aritmetica/agilidad-aritmetica.component';
import { AdivinaElNumeroComponent } from './components/paginas/jueguitos/adivina-el-numero/adivina-el-numero.component';
import { TaTeTiComponent } from './components/paginas/jueguitos/ta-te-ti/ta-te-ti.component';
import { MemotestComponent } from './components/paginas/jueguitos/memotest/memotest.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/paginas/home/home.component';
import { NotFoundComponent } from './components/paginas/not-found/not-found.component';
import { JuegosComponent } from './components/paginas/juegos/juegos.component';
import { AcercaDeComponent } from './components/paginas/acerca-de/acerca-de.component';
import { IniciarSesionComponent } from './components/paginas/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './components/paginas/registrarse/registrarse.component';
import { CerrarSesionComponent } from './components/paginas/cerrar-sesion/cerrar-sesion.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CartaComponent } from './components/carta/carta.component';
import { CeldaComponent } from './components/celda/celda.component';
import { PerfilComponent } from './components/paginas/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    JuegosComponent,
    AcercaDeComponent,
    ToolbarComponent,
    AnagramaComponent,
    PiedraPapelTijeraComponent,
    AgilidadAritmeticaComponent,
    AdivinaElNumeroComponent,
    TaTeTiComponent,
    MemotestComponent,
    CardComponent,
    IniciarSesionComponent,
    RegistrarseComponent,
    CerrarSesionComponent,
    SpinnerComponent,
    CartaComponent,
    CeldaComponent,
    PerfilComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
