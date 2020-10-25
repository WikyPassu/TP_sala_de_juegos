import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { first } from 'rxjs/operators';
import { MenuItemsService } from "./menu-items.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;
  datos: any = null;
  logged: boolean = false;

  constructor(private auth: AngularFireAuth, private menu: MenuItemsService) {
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
    return this.auth.currentUser;
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
    });
    return logged;
  }

  // getToken(){
  //   return this.auth.idToken;
  // }

  // getUser(){
  //   return this.authState ? this.authState.email : null;
  // }  
}