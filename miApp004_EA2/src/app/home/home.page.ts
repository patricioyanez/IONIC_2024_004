import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numero1:any;
  constructor(private router:Router) {}
  abrirPagina()
  {
    if(this.numero1 > 0)
    {
      this.router.navigate(['/segunda']);
    }
  }
  // error lens
  abrirPagina2()
  {
    if(this.numero1 > 0)
    {
      this.router.navigateByUrl('segunda');
    }
  }abrirPagina3()
  {
    if(this.numero1 > 0)
    {
      this.router.navigate(['/segunda', {num: this.numero1} ]);
    }
  }
}
