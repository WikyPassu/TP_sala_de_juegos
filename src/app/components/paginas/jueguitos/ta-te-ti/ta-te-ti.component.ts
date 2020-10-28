import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ta-te-ti',
  templateUrl: './ta-te-ti.component.html',
  styleUrls: ['./ta-te-ti.component.scss']
})
export class TaTeTiComponent implements OnInit {

  celdas: any[];
  celdasSinMarcar: any[];
  turno: boolean;
  ganador: string;
  bloqueado: boolean;
  turnoActual: string;
  jugadas: number = 0;
  ganadas: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.empezarJuegoNuevo();
  }

  empezarJuegoNuevo(){
    this.celdas = Array(9).fill(null);
    this.celdasSinMarcar = [];
    this.turno = true;
    this.ganador = null;
    this.bloqueado = false;
    this.turnoActual = "Usuario";
  }

  get jugador(){
    return this.turno ? 'X' : 'O';
  }

  marcarCelda(index: number){
    this.turnoActual = "Usuario";
    if(!this.celdas[index]){
      this.turnoUsuario(index);
      if(this.obtenerGanador() === null){
        this.turnoIA();
        setTimeout(() => {
          this.obtenerGanador();  
        }, 1001);
      }
    }
  }

  turnoUsuario(index: number){
    this.bloqueado = true;
    this.celdas.splice(index, 1, this.jugador);
    this.celdasSinMarcar = [];
    for(let i=0; i<this.celdas.length; i++){
      if(this.celdas[i] === null){
        this.celdasSinMarcar.push(i);
      }
    }
    this.turno = !this.turno;
    this.turnoActual = "IA";
  }

  turnoIA(){
    setTimeout(() => {
      let random = Math.floor(Math.random() * this.celdasSinMarcar.length);
      this.celdas.splice(this.celdasSinMarcar[random], 1, this.jugador);
      this.turno = !this.turno;
      this.bloqueado = false;
      this.turnoActual = "Usuario";
    }, 1000);
  }

  obtenerGanador(){
    let ganador = null;
    let hayVacio: boolean = false;
    const lineas = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    
    for(let i=0; i<this.celdas.length; i++){
      if(this.celdas[i] == null){
        hayVacio = true;
        break;
      }
    }
    
    for(let i=0; i<lineas.length; i++){
      const [a, b, c] = lineas[i];
      if(this.celdas[a] && this.celdas[a] === this.celdas[b] && this.celdas[a] === this.celdas[c]){
        ganador = this.celdas[a];
        break;
      }
    }

    if(!hayVacio && ganador == null){
      this.bloqueado = true;
      ganador = "Empate";
      this.ganador = "¡Hay empate!";
      this.jugadas++;
    }
    else if(ganador != null){
      this.bloqueado = true;
      if(ganador == "X"){
        this.ganador = "¡Ganó el Usuario!";
        this.ganadas++;
      }
      else if(ganador == "O"){
        this.ganador = "¡Ganó la IA!";
      }
      this.jugadas++;
    }

    return ganador;
  }
}
