import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { JuegosComponent } from "./components/juegos/juegos.component";
import { AcercaDeComponent } from "./components/acerca-de/acerca-de.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AnagramaComponent } from './components/jueguitos/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './components/jueguitos/piedra-papel-tijera/piedra-papel-tijera.component';
import { AgilidadAritmeticaComponent } from './components/jueguitos/agilidad-aritmetica/agilidad-aritmetica.component';
import { AdivinaElNumeroComponent } from './components/jueguitos/adivina-el-numero/adivina-el-numero.component';
import { TaTeTiComponent } from './components/jueguitos/ta-te-ti/ta-te-ti.component';
import { MemotestComponent } from './components/jueguitos/memotest/memotest.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'juegos',
    component: JuegosComponent,
  },
  {
    path: 'juegos/anagrama',
    component: AnagramaComponent,
  },
  {
    path: 'juegos/piedra-papel-tijera',
    component: PiedraPapelTijeraComponent,
  },
  {
    path: 'juegos/agilidad-aritmetica',
    component: AgilidadAritmeticaComponent,
  },
  {
    path: 'juegos/adivina-el-numero',
    component: AdivinaElNumeroComponent,
  },
  {
    path: 'juegos/ta-te-ti',
    component: TaTeTiComponent,
  },
  {
    path: 'juegos/memotest',
    component: MemotestComponent,
  },
  {
    path: 'acerca-de',
    component: AcercaDeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
