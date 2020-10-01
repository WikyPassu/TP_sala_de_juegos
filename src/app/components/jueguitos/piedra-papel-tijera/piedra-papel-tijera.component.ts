import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.scss']
})
export class PiedraPapelTijeraComponent implements OnInit {

  jugadas: number = 0;
  ganadas: number = 0;
  usuario: string = "assets/piedrapapeltijera.png";
  IA: string = "assets/piedrapapeltijera.png";
  opUser: number;
  opIA: number;
  resultado: string = "Esperando...";

  constructor() {
  }

  ngOnInit(): void {
  }

  jugar(opcion: number){
    this.resultado = "Esperando...";
    if(opcion == 0){
      this.opUser = 0;
      this.usuario = "assets/piedra.png";
    }
    else if(opcion == 1){
      this.opUser = 1;
      this.usuario = "assets/papel.png";
    }
    else if(opcion == 2){
      this.opUser = 2
      this.usuario = "assets/tijera.png";
    }
    this.juegaIA();
  }

  juegaIA(){
    this.opIA = Math.floor(Math.random() * 3);
    if(this.opIA == 0){
      this.IA = "assets/piedra.png";
    }
    else if(this.opIA == 1){
      this.opIA= 1;
      this.IA = "assets/papel.png";
    }
    else if(this.opIA == 2){
      this.opIA = 2
      this.IA = "assets/tijera.png";
    }
    this.calcularResultado();
  }

  calcularResultado(){
    console.log(`Usuario: ${this,this.opUser} | IA: ${this.opIA}`);
    if((this.opUser == this.opIA)){
      this.resultado = "Empate";
    }
    if(this.opUser == 0 && this.opIA == 1){
      this.resultado = "Derrota :(";
    }
    if(this.opUser == 0 && this.opIA == 2){
      this.resultado = "¡Victoria!";
      this.ganadas++;
    }
    if(this.opUser == 1 && this.opIA == 2){
      this.resultado = "Derrota :(";
    }
    if(this.opUser == 1 && this.opIA == 0){
      this.resultado = "¡Victoria!";
      this.ganadas++;
    }
    if(this.opUser == 2 && this.opIA == 0){
      this.resultado = "Derrota :(";
    }
    if(this.opUser == 2 && this.opIA == 1){
      this.resultado = "¡Victoria!";
      this.ganadas++;
    }
    this.jugadas++;
  }
}
