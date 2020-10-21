import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;
  datos: any = null;
  logged: boolean = false;

  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe(state => {
      this.authState = state;
    });
  }

  login(email: string, password: string){
    return new Promise((resolve, rejected) => {
      this.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.logged = true;
        resolve(user);
      })
      .catch(error => rejected(error));
    });
  }

  register(email: string, password: string){
    return new Promise((resolve, rejected) => {
      this.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
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
    })
    .catch(error => {
      console.log(error);
      retorno = false;
    })
    return retorno;
  }

  getToken(){
    return this.auth.idToken;
  }

  getUser(){
    return this.authState ? this.authState.email : null;
  }

  getDatos(){
    return this.datos;
  }

  setDatos(value: any){
    this.datos = value;
  }
}