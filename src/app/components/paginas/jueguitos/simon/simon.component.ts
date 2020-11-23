import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.scss']
})
export class SimonComponent implements OnInit {

  listo: boolean = false;
  titulo: string = "¿Podrás seguir la secuencia?";
  turnoJugador: boolean = false;
  activoVerde: boolean = false;
  activoRojo: boolean = false;
  activoAmarillo: boolean = false;
  activoAzul: boolean = false;
  secuencia = new Array();
  secuenciaJugador = new Array();
  seEquivoco: boolean = false;
  contador: number = -1;
  puntaje: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  async wait(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async secuenciar(){
    this.titulo = "Prestá atención...";
    let actual: number = Math.floor(Math.random() * 4);
    this.secuencia.push(actual);
    console.log(this.secuencia);

    let i = 0;
    let movimientos = await setInterval(async () => {
      switch(this.secuencia[i]){
        case 0:
          this.activoVerde = true;
          this.playAudio(0);
          await this.wait(500);
          this.activoVerde = false;
          break;
        case 1:
          this.activoRojo = true;
          this.playAudio(1);
          await this.wait(500);
          this.activoRojo = false;
          break;
        case 2:
          this.activoAmarillo = true;
          this.playAudio(2);
          await this.wait(500);
          this.activoAmarillo = false;
          break;
        case 3:
          this.activoAzul = true;
          this.playAudio(3);
          await this.wait(500);
          this.activoAzul = false;
          break;
      }
      i++;
      if(i >= this.secuencia.length){
        clearInterval(movimientos);
        this.turnoJugador = true;
        this.titulo = "Tu turno";
      }
    }, 1000);
  }

  elegir(opcion: number){
    if(this.turnoJugador){
      this.turnoJugador = false;
      switch(opcion){
        case 0:
          this.activoVerde = true;
          this.playAudio(0);
          setTimeout(() => {
            this.activoVerde = false;
          }, 500);
          break;
        case 1:
          this.activoRojo = true;
          this.playAudio(1);
          setTimeout(() => {
            this.activoRojo = false;
          }, 500);
          break;
        case 2:
          this.activoAmarillo = true;
          this.playAudio(2);
          setTimeout(() => {
            this.activoAmarillo = false;
          }, 500);
          break;
        case 3:
          this.activoAzul = true;
          this.playAudio(3);
          setTimeout(() => {
            this.activoAzul = false;
          }, 500);
          break;
      }
      this.secuenciaJugador.push(opcion);
      
      this.contador++;

      if(this.secuenciaJugador.length < this.secuencia.length){
        if(opcion != this.secuencia[this.contador]){
          this.seEquivoco = true;
        }
        if(this.seEquivoco){
          this.titulo = "¡Upss! Te equivocaste...";
          console.log("La quedaste rey");
          this.turnoJugador = false;
          return false;
        }
      }

      if(this.secuenciaJugador.length == this.secuencia.length){
        for(let i=0; i<this.secuencia.length; i++){
          if(this.secuenciaJugador[i] != this.secuencia[i]){
            this.seEquivoco = true;
            break;
          }
        }
        if(this.seEquivoco){
          this.titulo = "¡Upss! Te equivocaste...";
          console.log("La quedaste rey");
          this.turnoJugador = false;
          return false;
        }
        else{
          this.contador = -1;
          this.puntaje++;
          this.titulo = "Prestá atención...";
          this.secuenciaJugador = new Array();
          setTimeout(() => {
            this.secuenciar();  
          }, 1000);
        }
      }
      else{
        this.turnoJugador = true;
        this.titulo = "Tu turno";
      }
    }
  }

  empezarJuego(){
    this.listo = true;
    this.seEquivoco = false;
    this.puntaje = 0;
    this.secuencia = new Array();
    this.secuenciaJugador = new Array();
    this.titulo = "Prestá atención...";
    this.secuenciar();
  }

  playAudio(opcion: number){
    let audio = new Audio();
    audio.load();
    switch(opcion){
      case 0:
        audio.src = "assets/sounds/simon1.mp3";
        break;
      case 1:
        audio.src = "assets/sounds/simon2.mp3";
        break;
      case 2:
        audio.src = "assets/sounds/simon3.mp3";
        break;
      case 3:
        audio.src = "assets/sounds/simon4.mp3";
        break;
    }
    audio.play();
  }
}
