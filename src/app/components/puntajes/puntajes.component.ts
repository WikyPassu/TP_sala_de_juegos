import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-puntajes',
  templateUrl: './puntajes.component.html',
  styleUrls: ['./puntajes.component.scss']
})
export class PuntajesComponent implements OnInit {

  @Input() src: string;
  @Input() jugadas: number;
  @Input() mejorPuntaje: string;
  @Input() mejoresPartidas = new Array();

  constructor() { }

  ngOnInit(): void {
  }

}
