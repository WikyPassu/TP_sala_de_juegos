import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  usuario: string = "";
  
  jugadasPPT: number;
  victoriasPPT: string;
  empatesPPT: string;
  derrotasPPT: string;
  
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
    
    this.auth.traerPartidasUsuarioPPT().subscribe(res => this.jugadasPPT = res.length);
    this.auth.traerGanadasUsuarioPPT().subscribe(res => {
      let ganadas: number = res.length;
      this.victoriasPPT = (ganadas * 100 / this.jugadasPPT) + "%";
    });
    this.auth.traerEmpatesUsuarioPPT().subscribe(res => {
      let empates: number = res.length;
      this.empatesPPT = (empates * 100 / this.jugadasPPT) + "%";
    });
    this.auth.traerDerrotasUsuarioPPT().subscribe(res => {
      let derrotas: number = res.length;
      this.derrotasPPT = (derrotas * 100 / this.jugadasPPT) + "%";
    });

    this.auth.traerPartidasUsuarioAEN().subscribe((res: any) => {
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
    this.auth.traerMejoresPartidasUsuarioAEN().subscribe(res => {
      console.log(res);
      this.mejoresPartidasAEN = res;
      this.mejoresPartidasAEN.forEach(partida => {
        partida.tiempo = this.transform(partida.tiempo);
      });
    });

    this.auth.traerPartidasUsuarioTTT().subscribe(res => this.jugadasTTT = res.length);
    this.auth.traerGanadasUsuarioTTT().subscribe(res => {
      let ganadas: number = res.length;
      this.victoriasTTT = (ganadas * 100 / this.jugadasTTT) + "%";
    });
    this.auth.traerEmpatesUsuarioTTT().subscribe(res => {
      let empates: number = res.length;
      this.empatesTTT = (empates * 100 / this.jugadasTTT) + "%";
    });
    this.auth.traerDerrotasUsuarioTTT().subscribe(res => {
      let derrotas: number = res.length;
      this.derrotasTTT = (derrotas * 100 / this.jugadasTTT) + "%";
    });
    
    this.auth.traerPartidasUsuarioMEM().subscribe((res: any) => {
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
    this.auth.traerMejoresPartidasUsuarioMEM().subscribe(res => {
      console.log(res);
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
