import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  n1:number=0;
  n2:number=0;
  resultado:number=0;
  constructor() { }

  ngOnInit() {
  }
  sumar()
  {
    this.resultado = Number(this.n1) + Number(this.n2);
  }
}
