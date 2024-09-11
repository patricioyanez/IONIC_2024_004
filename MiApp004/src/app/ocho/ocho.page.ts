import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ocho',
  templateUrl: './ocho.page.html',
  styleUrls: ['./ocho.page.scss'],
})
export class OchoPage implements OnInit {
  n1 = '';
  n2 = '';
  n3 = '';
  resultado : any ='';
  mostrar : boolean = false;
  constructor(private toastController:ToastController) { }

  ngOnInit() {
  }
  // extension Error Lens
  async promediar(){
    this.resultado =  (this.n1 + this.n2 + this.n3);
    this.resultado /=3; 
    if(this.resultado < 40)
    {
      const toast = await this.toastController.create({
        message : 'Ud reprobó con nota ' + this.resultado,
        duration: 3000,
        position: 'middle',
        color   : 'danger'
      });
      await toast.present();
    }
    else
    {
      const toast = await this.toastController.create({
        message : 'Ud Aprobó con nota ' + this.resultado,
        duration: 3000,
        position: 'middle',
        color   : 'primary'
      });
      await toast.present();
    }
  }
  verModal()
  {
    this.mostrar = !this.mostrar;
  }
}
