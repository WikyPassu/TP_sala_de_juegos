import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {

  flipped: boolean = true;
  srcReverso: string = "assets/interrogacion.png";
  @Input() srcFrente: string;

  constructor() { }

  ngOnInit(): void {
  }

  voltearCarta(){
    this.flipped = !this.flipped;
  }
}
