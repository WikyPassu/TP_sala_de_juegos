import { Component, OnInit } from '@angular/core';
import { MenuItem } from "../../interfaces/menu-item";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      texto: "Inicio",
      icono: "home",
      ruta: ""
    },
    {
      texto: "Juegos",
      icono: "sports_esports",
      ruta: "juegos"
    },
    {
      texto: "Acerca de...",
      icono: "account_circle",
      ruta: "acerca-de"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
