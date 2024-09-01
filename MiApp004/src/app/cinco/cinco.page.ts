import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cinco',
  templateUrl: './cinco.page.html',
  styleUrls: ['./cinco.page.scss'],
})
export class CincoPage implements OnInit {
  boton = ['Aceptar'];

  numero: number;
  numero2: number = 100;



  constructor(private alertController: AlertController) {
    this.numero = 0;
   }

  ngOnInit() {
  }
  async funcionAlerta()
  {
    const alert = await this.alertController.create({
        header    : "Alerta",
        subHeader : "Mensaje de alerta",
        message   :"Esto es un mensaje de ejemplo",
        buttons   : ["Ok"]
    });
    alert.present();
  }
  incrementar()
  {
    this.numero++;
  }
  decrementar()
  {
    this.numero--;
  }

}
