import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { MenuItemsService } from "../../services/menu-items.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  email: string = "";
  password: string = "";
  logged: boolean;
  hayError: boolean = false;
  mensaje: string;
  formLogin: boolean = true;
  formRegistro: boolean = false;
  seRegistro: boolean = false;
  mensajeRegistro: string = "¡Usuario registrado exitosamente!";

  constructor(private auth: AuthService, private router: Router, private menu: MenuItemsService) {
    this.logged = this.auth.logged;
  }

  ngOnInit(): void {
  }

  login(){
    this.mensaje = "";
    this.hayError = false;
    this.seRegistro = false;
    this.auth.login(this.email, this.password)
    .then((res: any) => {
      this.auth.setDatos({
        uid: res.user.uid,
        email: res.user.email
      });
      this.menu.pushMenuItem("Cerrar Sesión", "exit_to_app", "", true);
      this.formLogin = false;
      this.router.navigate(["/juegos"]);
    })
    .catch(error => {
      this.mensaje = error;
      this.hayError = true;
    });
  }

  register(){
    this.mensaje = "";
    this.hayError = false;
    this.seRegistro = false;
    this.auth.register(this.email, this.password)
    .then(() => {
      this.formLogin = true;
      this.formRegistro = false;
      this.seRegistro = true;
    })
    .catch(error => {
      this.mensaje = error;
      this.hayError = true;
    });
  }

  mostrarLogin(){
    this.formLogin = true;
    this.formRegistro = false;
    this.hayError = false;
    this.mensaje = "";
    this.seRegistro = false;
  }

  mostrarRegistro(){
    this.formLogin = false;
    this.formRegistro = true;
    this.hayError = false;
    this.mensaje = "";
    this.seRegistro = false;
  }
}
