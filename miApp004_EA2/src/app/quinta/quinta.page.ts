import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
  persona:any = [];
  personas:any = [];
  constructor(private crudService:CrudService) { }

  ngOnInit() {
  }
  guardar()
  {
    this.crudService.guardar(this.persona.rut, this.persona);
    this.limpiar();
  }
    /*
  Ejercicio 25: enviar mensaje toast o alert en caso de que el rut no exista en el 
  localstorage 

  */
  async leer()
  {
    this.persona = await this.crudService.leer(this.persona.rut);
  }
  limpiar()
  {
    this.persona = [];
    this.personas = [];
    const input = document.querySelector('ion-input');
    if(input != null)
      input.setFocus();
  }
  
  /*
  Ejercicio 23: Agregar el boton eliminar

  */

  async eliminar()
  {
    this.crudService.eliminar(this.persona.rut);
    this.limpiar();
  }
   /*
  Ejercicio 24: Listar todos los elementos guardados en el
  storage
  */
  async listar()
  {
    this.personas = await this.crudService.listar();
  }
  /*
 Ejercicio 25: Agregar un evento click a la lista de usuario y cargar la info en el 
 formulario
 */

 async leer2(id:string)
 {
   this.persona = await this.crudService.leer(id);
 }
 async leer3(persona:any)
 {
   this.persona = persona;
 }
}
