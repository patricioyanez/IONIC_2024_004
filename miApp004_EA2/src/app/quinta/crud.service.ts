import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  async guardar(id: string, valor:[])
  {
    localStorage.setItem(id, JSON.stringify({...valor}));
  }
  async leer(id:string)
  {
    let temp = localStorage.getItem(id);
    if(temp != null)
      return JSON.parse(temp);
    return null;
  }
  async eliminar(id: string)
  {
    localStorage.removeItem(id);
  }
  async listar()
  {
    
  }
}
