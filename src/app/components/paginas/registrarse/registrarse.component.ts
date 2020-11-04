import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {

  email: string = "";
  password: string = "";
  hayError: boolean = false;
  mensaje: string;
  seRegistro: boolean = false;
  mensajeRegistro: string = "¡Usuario registrado exitosamente!";
  spinner: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.mensaje = "";
    this.hayError = false;
    this.seRegistro = false;
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
        this.auth.register(this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          this.seRegistro = true;
          this.spinner = false;
          this.router.navigate(["/juegos"]);
        })
        .catch(error => {
          console.log(error);
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
          else if(error.code == "auth/email-already-in-use"){
            this.mensaje = "Ese correo electrónico ya se encuentra en uso.";
          }
          else if(error.code == "auth/weak-password"){
            this.mensaje = "La contraseña debe tener al menos 6 caracteres.";
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
