import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ratios',
  templateUrl: './ratios.component.html',
  styleUrls: ['./ratios.component.scss']
})
export class RatiosComponent implements OnInit {

  @Input() src: string;
  @Input() jugadas: number;
  @Input() victorias: number;
  @Input() empates: number;
  @Input() derrotas: number;

  constructor() { }

  ngOnInit(): void {
  }

}
