import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ta-te-ti',
  templateUrl: './ta-te-ti.component.html',
  styleUrls: ['./ta-te-ti.component.scss']
})
export class TaTeTiComponent implements OnInit {

  celdas: any[];
  turno: boolean;
  ganador: string;
  bloqueado: boolean;

  constructor() { }

  ngOnInit(): void {
    this.empezarJuegoNuevo();
  }

  empezarJuegoNuevo(){
    this.celdas = Array(9).fill(null);
    this.turno = true;
    this.bloqueado = false;
  }

  get jugador(){
    return this.turno ? 'X' : 'O';
  }

  marcarCelda(index: number){
    if(!this.celdas[index]){
      this.celdas.splice(index, 1, this.jugador);
      this.turno = !this.turno;
    }
    this.ganador = this.obtenerGanador();
    if(this.ganador != null){
      this.bloqueado = true;
    }
    
  }

  obtenerGanador(){
    let retorno = null;
    const lineas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(let i=0; i<lineas.length; i++){
      const [a, b, c] = lineas[i];
      if(this.celdas[a] && this.celdas[a] === this.celdas[b] && this.celdas[a] === this.celdas[c]){
        retorno = this.celdas[a];
      }
    }
    return retorno;
  }
}
