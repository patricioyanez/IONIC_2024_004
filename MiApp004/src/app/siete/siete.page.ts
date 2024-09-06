import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siete',
  templateUrl: './siete.page.html',
  styleUrls: ['./siete.page.scss'],
})
export class SietePage implements OnInit {
  // string, number, boolean y any
  nombre = 'Ana';
  primerApellido : string;

  n1 = ''
  n2 = '';
  resultado : any =''
  constructor() { 
    this.primerApellido = 'Díaz';
  }

  ngOnInit() {
  }

}
