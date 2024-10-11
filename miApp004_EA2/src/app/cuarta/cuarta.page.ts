import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuarta',
  templateUrl: './cuarta.page.html',
  styleUrls: ['./cuarta.page.scss'],
})
export class CuartaPage implements OnInit {
  id:string = '';
  nombre:string = '';
  constructor() { }

  ngOnInit() {
    // localStorage.setItem('12', 'Juan');
  }
/*
  Ejercicio 21: Crear formulario con 2 input (clave y nombre)
  guardar en localstorage
*/
guardar(){
  localStorage.setItem(this.id, this.nombre);
  this.id = this.nombre = '';
}
}
