import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.scss']
})
export class MemotestComponent implements OnInit {

  srcFrente: string = "assets/piedra.png"

  constructor() { }

  ngOnInit(): void {
  }

}
