import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private urlBase = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient:HttpClient) { }

  async getUsers()
  {
    const ruta = this.urlBase + 'users';
    return await firstValueFrom(this.httpClient.get(ruta));
  }
  async getPosts(id:string)
  {
    const ruta = this.urlBase + 'users/' + id + '/posts';
    return await firstValueFrom(this.httpClient.get(ruta));
  }
}
