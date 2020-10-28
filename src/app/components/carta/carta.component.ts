import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {

  srcReverso: string = "assets/interrogacion.png";
  @Input() flipped: boolean;
  @Input() canBeFlipped: boolean;
  @Input() srcFrente: string;

  constructor() { }

  ngOnInit(): void {
  }

  voltearCarta(){
    if(this.canBeFlipped){
      this.flipped = !this.flipped;
    }
  }
}
