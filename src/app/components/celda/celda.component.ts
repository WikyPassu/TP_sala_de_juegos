import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.scss']
})
export class CeldaComponent implements OnInit {

  @Input() valor : 'X' | 'O';
  @Input() bloqueado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
