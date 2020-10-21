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
import { LoggedInGuard } from "./guards/logged-in.guard";
import { NotLoggedInGuard } from "./guards/not-logged-in.guard";
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { CerrarSesionComponent } from './components/cerrar-sesion/cerrar-sesion.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'juegos',
    component: JuegosComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'juegos/anagrama',
    component: AnagramaComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'juegos/piedra-papel-tijera',
    component: PiedraPapelTijeraComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'juegos/agilidad-aritmetica',
    component: AgilidadAritmeticaComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'juegos/adivina-el-numero',
    component: AdivinaElNumeroComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'juegos/ta-te-ti',
    component: TaTeTiComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'juegos/memotest',
    component: MemotestComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'acerca-de',
    component: AcercaDeComponent
  },
  {
    path: 'registro',
    component: RegistrarseComponent,
    canActivate: [NotLoggedInGuard]
  },
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent,
    canActivate: [NotLoggedInGuard]
  },
  {
    path: 'cerrar-sesion',
    component: CerrarSesionComponent,
    canActivate: [LoggedInGuard]
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
