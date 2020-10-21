import { Injectable } from '@angular/core';
import { MenuItem } from "../interfaces/menu-item";

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  
  menuItems: MenuItem[] = [];
  
  constructor() {
    this.menuItems = [
      {
        texto: "Inicio",
        icono: "home",
        ruta: "",
        funcion: false
      },
      {
        texto: "Juegos",
        icono: "sports_esports",
        ruta: "juegos",
        funcion: false
      },
      {
        texto: "Acerca de...",
        icono: "account_circle",
        ruta: "acerca-de",
        funcion: false
      }];
  }

  getMenu(){
    return this.menuItems;
  }

  pushMenuItem(texto:string, icono:string, ruta:string, funcion:boolean = false){
    this.menuItems.push({
      texto: texto,
      icono: icono,
      ruta: ruta,
      funcion: funcion
    });
  }

  popMenuItem(){
    this.menuItems.pop();
  }
}
