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
        activo: true
      },
      {
        texto: "Juegos",
        icono: "sports_esports",
        ruta: "juegos",
        activo: false
      },
      {
        texto: "Acerca de...",
        icono: "account_circle",
        ruta: "acerca-de",
        activo: true
      },
      {
        texto: "Registrarse",
        icono: "person_add",
        ruta: "registro",
        activo: true
      },
      {
        texto: "Iniciar sesión",
        icono: "login",
        ruta: "iniciar-sesion",
        activo: true
      },
      {
        texto: "Cerrar sesión",
        icono: "exit_to_app",
        ruta: "cerrar-sesion",
        activo: false
      }
    ]
  }

  getMenu(){
    return this.menuItems;
  }

  changeItemStatus(index: number, activo: boolean){
    this.menuItems[index].activo = activo;
  }
}
