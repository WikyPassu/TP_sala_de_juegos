import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.scss']
})
export class AdivinaElNumeroComponent implements OnInit {

  time: number = 0;
  display;
  interval;
  mensaje:string = "Esperando a que ingreses un número...";
  activado: boolean = true;
  numeroAdivinar: number;
  numero: number;
  ganadas: number = 0;
  intentos: number = 0;
  disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display=this.transform( this.time)
    }, 1000);
  }
  
  transform(value: number): string {
       const minutes: number = Math.floor(value / 60);
       return minutes + ':' + (value - minutes * 60);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  empezar(){
    this.activado = false;
    this.startTimer();
    this.numeroAdivinar = Math.floor(Math.random() * 100) + 1;
    console.log(this.numeroAdivinar);
  }

  comprobar(){
    if(this.numero < 1 || this.numero > 100){
      this.mensaje = "El número esta en un rango entre 1-100";
    }
    else if(this.numero > this.numeroAdivinar){
      this.mensaje = `El número a adivinar es menor que ${this.numero}`;
      this.intentos++;
    }
    else if(this.numero < this.numeroAdivinar){
      this.mensaje = `El número a adivinar es mayor que ${this.numero}`;
      this.intentos++;
    }
    else if(this.numero == this.numeroAdivinar){
      this.intentos++;
      this.ganadas++;
      this.disabled = true;
      this.pauseTimer();
      this.mensaje = `¡ADIVINASTE! ¡EL NÚMERO ERA ${this.numeroAdivinar}!`;
    }
  }

  jugarOtraVez(){
    this.pauseTimer();
	this.numero = "";
	this.intentos = 0;
    this.mensaje = "Esperando a que ingreses un número...";
    this.time = 0;
    this.empezar();
    this.disabled = false;
  }
}
