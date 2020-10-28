import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.scss']
})
export class MemotestComponent implements OnInit {

  //Reverso: flipped = true
  //Cara: flipped = false

  srcFrente = [
    {id: 0, src: "assets/manzana.png", flipped: true, canBeFlipped: false},
    {id: 1, src: "assets/banana.png", flipped: true, canBeFlipped: false},
    {id: 2, src: "assets/naranja.png", flipped: true, canBeFlipped: false},
    {id: 3, src: "assets/pera.png", flipped: true, canBeFlipped: false},
    {id: 4, src: "assets/frutilla.png", flipped: true, canBeFlipped: false},
    {id: 5, src: "assets/uva.png", flipped: true, canBeFlipped: false},
    {id: 6, src: "assets/manzana.png", flipped: true, canBeFlipped: false},
    {id: 7, src: "assets/banana.png", flipped: true, canBeFlipped: false},
    {id: 8, src: "assets/naranja.png", flipped: true, canBeFlipped: false},
    {id: 9, src: "assets/pera.png", flipped: true, canBeFlipped: false},
    {id: 10, src: "assets/frutilla.png", flipped: true, canBeFlipped: false},
    {id: 11, src: "assets/uva.png", flipped: true, canBeFlipped: false}
  ];

  fila1 = [];
  fila2 = [];
  fila3 = [];

  activado: boolean = true;
  time: number = 0;
  display;
  interval;
  mensaje:string = "Te doy un tiempito para que memorices las cartas...";
  mostrarTiempo: boolean = false;
  carta1: any = {}
  carta2: any = {}
  cartasSeleccionadas: number = 0;
  pares: number = 0;
  mostrarTabla: boolean = true;

  constructor() {
    this.srcFrente = this.shuffle();
    this.llenarFilas();
  }

  ngOnInit(): void {
  }

  shuffle() {
    let currentIndex = this.srcFrente.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = this.srcFrente[currentIndex];
      this.srcFrente[currentIndex] = this.srcFrente[randomIndex];
      this.srcFrente[randomIndex] = temporaryValue;
    }
    return this.srcFrente;
  }

  llenarFilas(){
    this.fila1 = [];
    this.fila2 = [];
    this.fila3 = [];
    for(let i=0; i<4; i++){
      this.fila1.push(this.srcFrente[i]);
    }
    for(let i=4; i<8; i++){
      this.fila2.push(this.srcFrente[i]);
    }
    for(let i=8; i<12; i++){
      this.fila3.push(this.srcFrente[i]);
    }
  }

  voltearCarta(id: number){
    for(let i=0; i<this.srcFrente.length; i++){
      if(this.srcFrente[i].canBeFlipped){
        if(this.srcFrente[i].id == id){
          this.srcFrente[i].flipped = false;
          this.srcFrente[i].canBeFlipped = false;
          this.cartasSeleccionadas++;
          if(this.cartasSeleccionadas == 1){
            this.carta1 = {id: this.srcFrente[i].id, src: this.srcFrente[i].src};
          }
          else if(this.cartasSeleccionadas == 2){
            this.carta2 = {id: this.srcFrente[i].id, src: this.srcFrente[i].src};
          }
          break;
        }
      }
    }
    if(this.cartasSeleccionadas == 2){
      this.compararCartas();
    }
  }
  //Reverso: flipped = true
  //Cara: flipped = false
  compararCartas(){
    if(this.carta1.src == this.carta2.src){
      this.mensaje = "¡Bien, completaste un par!";
      this.cartasSeleccionadas = 0;
      this.pares++;
      if(this.pares == 6){
        this.pauseTimer();
        this.mensaje = "¡GANASTE!";
      }
    }
    else{
      this.mensaje = "Upss... esas cartas no son iguales...";
      setTimeout(() => {
        this.srcFrente.forEach(carta => {
          if(carta.id == this.carta1.id || carta.id == this.carta2.id){
            carta.flipped = true;
            carta.canBeFlipped = true;
          }
        });
        this.cartasSeleccionadas = 0;  
      }, 800);
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.time === 0){
        this.time++;
      }else
      {
        this.time++;
      }
      this.display = this.transform(this.time)
    }, 1000);
  }
  
  transform(value: number): string {
       const minutes: number = Math.floor(value / 60);
       return minutes + ':' + (value - minutes * 60);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  mostrarCartas(){
    this.activado = false;
    this.srcFrente.forEach(carta => {
      carta.flipped = false;
    });
    setTimeout(() => {
      this.mostrarTiempo = true;
      this.mensaje = "Esperando a que elijas un par de cartas...";
      this.srcFrente.forEach(carta => {
        carta.canBeFlipped = true;
        carta.flipped = true;
      });
      this.startTimer();
    }, 5000);
  }

  volverAJugar(){
    this.mostrarTabla = false;
    this.mostrarTiempo = false;
    this.mensaje = "";
    this.srcFrente.forEach(carta => {
      carta.flipped = true;
    });
    this.srcFrente = this.shuffle();
    this.llenarFilas();
    setTimeout(() => {
      this.mostrarTabla = true;
      this.activado = true;
      this.time = 0;
      this.pares = 0;
      this.mensaje = "Te doy un tiempito para que memorices las cartas...";
    }, 500);
  }
}
