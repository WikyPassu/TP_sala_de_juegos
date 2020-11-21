import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../services/auth.service";

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.scss']
})
export class AnagramaComponent implements OnInit {

  listo: boolean = false;
  palabras = [
    ["GATO", "GOTA", "TOGA"],
    ["AMOR", "ARMO", "MORA", "OMAR", "RAMO", "ROMA"],
    ["SEPARAR", "PARARSE", "REPASAR"],
    ["ROBAR", "BARRO", "OBRAR"],
    ["LINEA", "ALIEN"],
    ["COBRA", "BARCO"]
  ];
  palabra: string = "";
  palabraUsuario: string = "";
  index: number;
  indexPalabra: number;
  caracteres: number;
  mensaje: string = "Esperando...";
  time: number = 0;
  display;
  interval;
  intentos: number = 0;
  gano: boolean = false;

  constructor(private db: AuthService) { }

  ngOnInit(): void {
    this.index = Math.floor(Math.random() * 6);
    this.indexPalabra = Math.floor(Math.random() * this.palabras[this.index].length);
    this.palabra = this.palabras[this.index][this.indexPalabra];
    this.caracteres = this.palabra.length;
  }

  empezarJuego(){
    this.listo = true;
    this.startTimer();
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

  comprobar(){
    if(this.palabraUsuario != ""){
      let noEs: boolean = false;
      this.palabraUsuario = this.palabraUsuario.toUpperCase();
      for(let i=0; i<this.palabras[this.index].length; i++){
        if(this.palabras[this.index][i] == this.palabraUsuario && this.palabraUsuario != this.palabra){
          this.pauseTimer();
          noEs = false;
          this.gano = true;
          this.mensaje = "¡Ganaste!";
          this.intentos++;
          this.db.guardarPartidaTiempo("ana", this.intentos, this.time);
          break;
        }
        else if(this.palabraUsuario == this.palabra){
          this.mensaje = "Esa es la misma palabra...";
          noEs = true;
        }
        else{
          this.mensaje = "Seguí intentando...";
          noEs = true;
        }
      }
      if(noEs){
        this.intentos++;
      }
    }
  }

  volverAJugar(){
    this.ngOnInit();
    this.time = 0;
    this.intentos = 0;
    this.mensaje = "Esperando...";
    this.gano = false;
    this.palabraUsuario = "";
    this.startTimer();
  }
}
