import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";
import { MenuItemsService } from "../../services/menu-items.service";

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.scss']
})
export class CerrarSesionComponent implements OnInit {

  spinner: boolean = false;
  //email: string;

  constructor(private auth: AuthService, private router: Router, private menu: MenuItemsService) {
    //this.email = this.auth.datos.email;
  }

  ngOnInit(): void {
  }

  logout(){
    this.spinner = true;
    setTimeout(() => {
      this.auth.logout();
      this.menu.changeItemStatus(1, false);
      this.menu.changeItemStatus(3, true);
      this.menu.changeItemStatus(4, true);
      this.menu.changeItemStatus(5, false);
      this.router.navigate([""]);
      this.spinner = false;  
    }, 2000);
  }
}
