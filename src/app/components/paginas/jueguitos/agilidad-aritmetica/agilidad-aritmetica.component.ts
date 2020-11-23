import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../services/auth.service";

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.scss']
})
export class AgilidadAritmeticaComponent implements OnInit {
  
  listo: boolean = false;
  num1: number;
  num2: number;
  num3: number;
  num4: number;
  num5: number;
  op1: string;
  op2: string;
  op3: string;
  op4: string;
  operaciones = ["+", "-", "*"];
  cuenta: string = "";
  respuesta: number;
  respuestaUsuario: string = "";
  mensaje: string = "Esperando...";
  time: number = 31;
  display;
  interval;
  intentos: number = 0;
  gano: boolean = false;
  deshabilitado: boolean;

  constructor(private db: AuthService) { }

  ngOnInit(): void {
    this.num1 = Math.floor(Math.random() * 10);
    this.num2 = Math.floor(Math.random() * 10);
    this.num3 = Math.floor(Math.random() * 10);
    this.num4 = Math.floor(Math.random() * 10);
    this.num5 = Math.floor(Math.random() * 10);
    this.op1 = this.operaciones[Math.floor(Math.random() * 3)];
    this.op2 = this.operaciones[Math.floor(Math.random() * 3)];
    this.op3 = this.operaciones[Math.floor(Math.random() * 3)];
    this.op4 = this.operaciones[Math.floor(Math.random() * 3)];
    this.cuenta = this.num1 + " " + this.op1 + " " + this.num2 + " " + this.op2 + " " + this.num3 + " " + this.op3 + " " + this.num4 + " " + this.op4 + " " + this.num5; 
    this.respuesta = eval(this.cuenta);
  }

  empezarJuego(){
    this.listo = true;
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.time != 0){
        this.time--;
        this.display = this.time;
      }
      else{
        this.pararJuego();
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  comprobar(){
    if(this.respuestaUsuario != ""){
      if(parseInt(this.respuestaUsuario) == this.respuesta){
        this.pauseTimer();
        this.gano = true;
        this.mensaje = "¡Ganaste!";
        this.intentos++;
        this.db.guardarPartidaTiempo("agi", this.intentos, 30 - this.time);
      }
      else{
        this.mensaje = "Ese no es el resultado...";
        this.intentos++;
      }
    }
  }

  pararJuego(){
    this.pauseTimer();
    this.deshabilitado = true;
    this.mensaje = "Se terminó el tiempo...";
    this.gano = true;
  }

  volverAJugar(){
    this.ngOnInit();
    this.time = 31;
    this.intentos = 0;
    this.mensaje = "Esperando...";
    this.gano = false;
    this.respuestaUsuario = "";
    this.deshabilitado = false;
    this.startTimer();
  }
}
