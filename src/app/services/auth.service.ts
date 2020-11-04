import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { first } from 'rxjs/operators';
import { MenuItemsService } from "./menu-items.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;
  datos: any = null;
  logged: boolean = false;

  constructor(private auth: AngularFireAuth, private db: AngularFirestore, private menu: MenuItemsService) {
    this.auth.authState.subscribe(state => {
      this.authState = state;
      if(this.authState != null){
        this.menu.changeItemStatus(1, true);
        this.menu.changeItemStatus(3, false);
        this.menu.changeItemStatus(4, false);
        this.menu.changeItemStatus(5, true);
      }
    });
  }

  login(email: string, password: string){
    return new Promise((resolve, rejected) => {
      this.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.logged = true;
        this.menu.changeItemStatus(1, true);
        this.menu.changeItemStatus(3, false);
        this.menu.changeItemStatus(4, false);
        this.menu.changeItemStatus(5, true);
        resolve(user);
      })
      .catch(error => rejected(error));
    });
  }

  register(email: string, password: string){
    return new Promise((resolve, rejected) => {
      this.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        let fecha = Date.now();
        this.db.collection("usuarios").doc(email+"."+fecha).set({
          id: email+"."+fecha,
          email: email,
          password: password,
          fecha: fecha
        });
        resolve(user);
      })
      .catch(error => rejected(error));
    });
  }

  logout(){
    let retorno:boolean = false;
    this.auth.signOut()
    .then(() => {
      this.logged = false;
      retorno = true;
      this.setDatos(null);
      this.menu.changeItemStatus(1, false);
      this.menu.changeItemStatus(3, true);
      this.menu.changeItemStatus(4, true);
      this.menu.changeItemStatus(5, false);
    })
    .catch(error => {
      console.log(error);
      retorno = false;
    })
    return retorno;
  }

  getDatos(){
    return this.datos;
  }

  setDatos(value: any){
    this.datos = value;
  }

  getCurrentUser(){
    return this.authState.email;
  }

  isLoggedIn() {
    return new Promise((resolve, rejected) => {
      this.auth.authState.pipe(first()).toPromise()
      .then(user => {
        let logged = false;
        if (user != null){
          logged = true;
        }
        resolve(logged);
      })
      .catch(error => rejected(error));
    });
  }

  async isLogged(){
    let logged: boolean;
    await this.isLoggedIn()
    .then((res: any) => {
      logged = res;
    })
    .catch((error: any) => {
      logged = false;
      console.log(error);
    });
    return logged;
  }

  // Funciones PPT

  guardarPartidaPPT(resultado: string){
    let fecha = Date.now();
    let id = this.getCurrentUser() + "." + fecha + ".ppt";
    this.db.collection("ppt").doc(id).set({
      id: id,
      usuario: this.getCurrentUser(),
      fecha: fecha,
      resultado: resultado
    });
  }

  traerPartidasUsuarioPPT(){
    return this.db.collection("ppt", ref => ref.where("usuario", "==", this.getCurrentUser())).valueChanges();
  }

  traerGanadasUsuarioPPT(){
    return this.db.collection("ppt", ref => ref.where("usuario", "==", this.getCurrentUser())
    .where("resultado", "==", "¡Victoria!")).valueChanges();
  }

  // Funciones AEN

  guardarPartidaAEN(intentos: number, tiempo: number){
    let fecha = Date.now();
    let id = this.getCurrentUser() + "." + fecha + ".aen";
    this.db.collection("aen").doc(id).set({
      id: id,
      usuario: this.getCurrentUser(),
      fecha: fecha,
      intentos: intentos,
      tiempo: tiempo
    });
  }

  traerPartidasUsuarioAEN(){
    return this.db.collection("aen", ref => ref.where("usuario", "==", this.getCurrentUser())).valueChanges();
  }

  // Funciones TTT

  guardarPartidaTTT(resultado: string){
    let fecha = Date.now();
    let id = this.getCurrentUser() + "." + fecha + ".ttt";
    this.db.collection("ttt").doc(id).set({
      id: id,
      usuario: this.getCurrentUser(),
      fecha: fecha,
      resultado: resultado
    });
  }

  traerPartidasUsuarioTTT(){
    return this.db.collection("ttt", ref => ref.where("usuario", "==", this.getCurrentUser())).valueChanges();
  }

  traerGanadasUsuarioTTT(){
    return this.db.collection("ttt", ref => ref.where("usuario", "==", this.getCurrentUser())
    .where("resultado", "==", "¡Ganó el Usuario!")).valueChanges();
  }

  // Funciones MEM

  guardarPartidaMEM(intentos: number, tiempo: number){
    let fecha = Date.now();
    let id = this.getCurrentUser() + "." + fecha + ".mem";
    this.db.collection("mem").doc(id).set({
      id: id,
      usuario: this.getCurrentUser(),
      fecha: fecha,
      intentos: intentos,
      tiempo: tiempo
    });
  }

  traerPartidasUsuarioMEM(){
    return this.db.collection("mem", ref => ref.where("usuario", "==", this.getCurrentUser())).valueChanges();
  }
}