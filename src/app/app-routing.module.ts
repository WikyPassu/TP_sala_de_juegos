import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/paginas/home/home.component";
import { JuegosComponent } from "./components/paginas/juegos/juegos.component";
import { AcercaDeComponent } from "./components/paginas/acerca-de/acerca-de.component";
import { NotFoundComponent } from "./components/paginas/not-found/not-found.component";
import { AnagramaComponent } from './components/paginas/jueguitos/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './components/paginas/jueguitos/piedra-papel-tijera/piedra-papel-tijera.component';
import { AgilidadAritmeticaComponent } from './components/paginas/jueguitos/agilidad-aritmetica/agilidad-aritmetica.component';
import { AdivinaElNumeroComponent } from './components/paginas/jueguitos/adivina-el-numero/adivina-el-numero.component';
import { TaTeTiComponent } from './components/paginas/jueguitos/ta-te-ti/ta-te-ti.component';
import { MemotestComponent } from './components/paginas/jueguitos/memotest/memotest.component';
import { LoggedInGuard } from "./guards/logged-in.guard";
import { NotLoggedInGuard } from "./guards/not-logged-in.guard";
import { IniciarSesionComponent } from './components/paginas/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './components/paginas/registrarse/registrarse.component';
import { CerrarSesionComponent } from './components/paginas/cerrar-sesion/cerrar-sesion.component';

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
