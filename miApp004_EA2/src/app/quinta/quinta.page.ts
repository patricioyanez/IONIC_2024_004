import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
  persona:any = [];
  constructor(private crudService:CrudService) { }

  ngOnInit() {
  }
  guardar()
  {
    this.crudService.guardar(this.persona.rut, this.persona);
    this.limpiar();
  }
  async leer()
  {
    this.persona = await this.crudService.leer(this.persona.rut);
  }
  limpiar()
  {
    this.persona = [];
    const input = document.querySelector('ion-input');
    if(input != null)
      input.setFocus();
  }
  
  /*
  Ejercicio 23: Agregar el boton eliminar

  */
   /*
  Ejercicio 24: Listar todos los elementos guardados en el
  storage

  */
}
