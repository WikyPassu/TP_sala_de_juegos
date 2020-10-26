import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.scss']
})
export class MemotestComponent implements OnInit {

  srcManzana = {id: 0, src: "assets/manzana.png", flipped: true};
  srcBanana = {id: 1, src: "assets/banana.png", flipped: true};
  srcNaranja = {id: 2, src: "assets/naranja.png", flipped: true};
  srcPera = {id: 3, src: "assets/pera.png", flipped: true};
  srcFrutilla = {id: 4, src: "assets/frutilla.png", flipped: true};
  srcUva = {id: 5, src: "assets/uva.png", flipped: true};

  srcFrente = [
    {id: 0, src: "assets/manzana.png", flipped: true},
    {id: 1, src: "assets/banana.png", flipped: true},
    {id: 2, src: "assets/naranja.png", flipped: true},
    {id: 3, src: "assets/pera.png", flipped: true},
    {id: 4, src: "assets/frutilla.png", flipped: true},
    {id: 5, src: "assets/uva.png", flipped: true},
    {id: 6, src: "assets/manzana.png", flipped: true},
    {id: 7, src: "assets/banana.png", flipped: true},
    {id: 8, src: "assets/naranja.png", flipped: true},
    {id: 9, src: "assets/pera.png", flipped: true},
    {id: 10, src: "assets/frutilla.png", flipped: true},
    {id: 11, src: "assets/uva.png", flipped: true},
  ];

  fila1 = [];
  fila2 = [];
  fila3 = [];

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
    while (0 !== currentIndex) {
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
}
