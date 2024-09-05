import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seis',
  templateUrl: './seis.page.html',
  styleUrls: ['./seis.page.scss'],
})
export class SeisPage implements OnInit {
  nombre:string;
  edad: number;
  mensaje :string = "Usuario VIP";
  permitir : boolean = false;
  asignaturas = [
    {nombre: "DSY1101", nota : 49.5},
    {nombre: "PGY4101", nota : 50},
    {nombre: "mdy4101", nota : 40},
  ];

  constructor() { 
    this.nombre = "Juan";
    this.edad = 36;
    console.log(this.asignaturas);
    console.table(this.asignaturas);
  }

  ngOnInit() {
  }
  mostrar()
  {
    this.permitir = !this.permitir;
  }
}
