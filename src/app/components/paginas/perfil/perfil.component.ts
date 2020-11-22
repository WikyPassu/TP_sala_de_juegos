import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  usuario: string = "";
  
  jugadasANA: number;
  mejorTiempoANA: string;
  mejoresPartidasANA = new Array();

  jugadasPPT: number;
  victoriasPPT: string;
  empatesPPT: string;
  derrotasPPT: string;
  
  jugadasAGI: number;
  mejorTiempoAGI: string;
  mejoresPartidasAGI = new Array();

  jugadasAEN: number;
  mejorTiempoAEN: string;
  mejoresPartidasAEN = new Array();

  jugadasTTT: number;
  victoriasTTT: string;
  empatesTTT: string;
  derrotasTTT: string;

  jugadasMEM: number;
  mejorTiempoMEM: string;
  mejoresPartidasMEM = new Array();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.usuario = this.auth.getCurrentUser();
    
    this.auth.traerPartidasUsuarioPorJuego("ana").subscribe((res: any) => {
      let min: number = null;
      let intentos: number = 0;
      this.jugadasANA = res.length;
      res.forEach(partida => {
        if(min == null){
          min = partida.tiempo;
          intentos = partida.intentos;
        }
        if(partida.tiempo < min){
          min = partida.tiempo;
          intentos = partida.intentos;
        }
      });
      this.mejorTiempoANA = this.transform(min) + ` con ${intentos} intentos.`;
    });
    this.auth.traerMejoresPartidasUsuarioPorJuego("ana").subscribe(res => {
      this.mejoresPartidasANA = res;
      this.mejoresPartidasANA.forEach(partida => {
        partida.tiempo = this.transform(partida.tiempo);
      });
    });
    
    this.auth.traerPartidasUsuarioPorJuego("ppt").subscribe(res => this.jugadasPPT = res.length);
    this.auth.traerResultadoUsuarioPorJuego("ppt", "¡Victoria!").subscribe(res => {
      let ganadas: number = res.length;
      this.victoriasPPT = (ganadas * 100 / this.jugadasPPT).toFixed(2) + "%";
    });
    this.auth.traerResultadoUsuarioPorJuego("ppt", "Empate").subscribe(res => {
      let empates: number = res.length;
      this.empatesPPT = (empates * 100 / this.jugadasPPT).toFixed(2) + "%";
    });
    this.auth.traerResultadoUsuarioPorJuego("ppt", "Derrota :(").subscribe(res => {
      let derrotas: number = res.length;
      this.derrotasPPT = (derrotas * 100 / this.jugadasPPT).toFixed(2) + "%";
    });

    this.auth.traerPartidasUsuarioPorJuego("agi").subscribe((res: any) => {
      let min: number = null;
      let intentos: number = 0;
      this.jugadasAGI = res.length;
      res.forEach(partida => {
        if(min == null){
          min = partida.tiempo;
          intentos = partida.intentos;
        }
        if(partida.tiempo < min){
          min = partida.tiempo;
          intentos = partida.intentos;
        }
      });
      this.mejorTiempoAGI = this.transform(min) + ` con ${intentos} intentos.`;
    });
    this.auth.traerMejoresPartidasUsuarioPorJuego("agi").subscribe(res => {
      this.mejoresPartidasAGI = res;
      this.mejoresPartidasAGI.forEach(partida => {
        partida.tiempo = this.transform(partida.tiempo);
      });
    });

    this.auth.traerPartidasUsuarioPorJuego("aen").subscribe((res: any) => {
      let min: number = null;
      let intentos: number = 0;
      this.jugadasAEN = res.length;
      res.forEach(partida => {
        if(min == null){
          min = partida.tiempo;
          intentos = partida.intentos;
        }
        if(partida.tiempo < min){
          min = partida.tiempo;
          intentos = partida.intentos;
        }
      });
      this.mejorTiempoAEN = this.transform(min) + ` con ${intentos} intentos.`;
    });
    this.auth.traerMejoresPartidasUsuarioPorJuego("aen").subscribe(res => {
      this.mejoresPartidasAEN = res;
      this.mejoresPartidasAEN.forEach(partida => {
        partida.tiempo = this.transform(partida.tiempo);
      });
    });

    this.auth.traerPartidasUsuarioPorJuego("ttt").subscribe(res => this.jugadasTTT = res.length);
    this.auth.traerResultadoUsuarioPorJuego("ttt", "¡Ganó el Usuario!").subscribe(res => {
      let ganadas: number = res.length;
      this.victoriasTTT = (ganadas * 100 / this.jugadasTTT).toFixed(2) + "%";
    });
    this.auth.traerResultadoUsuarioPorJuego("ttt", "¡Hay empate!").subscribe(res => {
      let empates: number = res.length;
      this.empatesTTT = (empates * 100 / this.jugadasTTT).toFixed(2) + "%";
    });
    this.auth.traerResultadoUsuarioPorJuego("ttt", "¡Ganó la IA!").subscribe(res => {
      let derrotas: number = res.length;
      this.derrotasTTT = (derrotas * 100 / this.jugadasTTT).toFixed(2) + "%";
    });
    
    this.auth.traerPartidasUsuarioPorJuego("mem").subscribe((res: any) => {
      let min: number = null;
      let intentos: number = 0;
      this.jugadasMEM = res.length;
      res.forEach(partida => {
        if(min == null){
          min = partida.tiempo;
          intentos = partida.intentos;
        }
        if(partida.tiempo < min){
          min = partida.tiempo;
          intentos = partida.intentos;
        }
      });
      this.mejorTiempoMEM = this.transform(min) + ` con ${intentos} intentos.`;
    });
    this.auth.traerMejoresPartidasUsuarioPorJuego("mem").subscribe(res => {
      this.mejoresPartidasMEM = res;
      this.mejoresPartidasMEM.forEach(partida => {
        partida.tiempo = this.transform(partida.tiempo);
      });
    });
  }

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
  }
}
