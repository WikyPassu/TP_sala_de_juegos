import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tiempos',
  templateUrl: './tiempos.component.html',
  styleUrls: ['./tiempos.component.scss']
})
export class TiemposComponent implements OnInit {

  @Input() src: string;
  @Input() jugadas: number;
  @Input() mejorTiempo: string;
  @Input() mejoresPartidas = new Array();

  constructor() { }

  ngOnInit(): void {
  }

}
