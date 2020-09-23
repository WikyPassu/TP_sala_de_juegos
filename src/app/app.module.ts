import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

import { FlexLayoutModule } from "@angular/flex-layout";

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

import { AnagramaComponent } from './components/jueguitos/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './components/jueguitos/piedra-papel-tijera/piedra-papel-tijera.component';
import { AgilidadAritmeticaComponent } from './components/jueguitos/agilidad-aritmetica/agilidad-aritmetica.component';
import { AdivinaElNumeroComponent } from './components/jueguitos/adivina-el-numero/adivina-el-numero.component';
import { TaTeTiComponent } from './components/jueguitos/ta-te-ti/ta-te-ti.component';
import { MemotestComponent } from './components/jueguitos/memotest/memotest.component';
import { CardComponent } from './components/card/card.component';


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
    CardComponent
  ],
  imports: [
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
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
