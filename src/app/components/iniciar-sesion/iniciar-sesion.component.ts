import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { MenuItemsService } from "../../services/menu-items.service";

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {

  email: string = "";
  password: string = "";
  mensaje: string = "";
  hayError: boolean = false;
  spinner: boolean = false;

  constructor(private auth: AuthService, private router: Router, private menu: MenuItemsService) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    this.mensaje = "";
    this.hayError = false;
    this.email = "admin@admin.com";
    this.password = "123456";
    this.spinner = true;
    setTimeout(() => {
      this.auth.login(this.email, this.password)
        .then((res: any) => {
          this.auth.setDatos({
            uid: res.user.uid,
            email: res.user.email
          });
          this.menu.changeItemStatus(1, true);
          this.menu.changeItemStatus(3, false);
          this.menu.changeItemStatus(4, false);
          this.menu.changeItemStatus(5, true);
          this.router.navigate(["/juegos"]);
          this.spinner = false;
        });
    }, 2000);
  }

  login(){
    this.mensaje = "";
    this.hayError = false;
    if(this.email == "" && this.password == "")
    {
      this.mensaje = "Campos email y contraseña vacíos.";
    }
    else if(this.email == "")
    {
      this.mensaje = "Campo email vacío.";
    }
    else if(this.password == "")
    {
      this.mensaje = "Campo contraseña vacío.";
    }
  
    if(this.mensaje != "")
    {
      this.hayError = true;
    }
    else{
      this.spinner = true;
      setTimeout(() => {
        this.auth.login(this.email, this.password)
        .then((res: any) => {
          this.auth.setDatos({
            uid: res.user.uid,
            email: res.user.email
          });
          this.menu.changeItemStatus(1, true);
          this.menu.changeItemStatus(3, false);
          this.menu.changeItemStatus(4, false);
          this.menu.changeItemStatus(5, true);
          this.router.navigate(["/juegos"]);
          this.spinner = false;
        })
        .catch(error => {
          if(error.code == "auth/invalid-email")
          {
            this.mensaje = "Formato inválido de correo electrónico.";
          }
          else if(error.code == "auth/user-not-found")
          {
            this.mensaje = "No existe un usuario con dicho correo electrónico.";
          }
          else if(error.code == "auth/wrong-password")
          {
            this.mensaje = "Contraseña incorrecta.";
          }
          else{
            this.mensaje = error;
          }
          this.hayError = true;
          this.spinner = false;
        });  
      }, 2000);
    }
  }
}
