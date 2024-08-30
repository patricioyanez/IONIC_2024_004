import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cinco',
  templateUrl: './cinco.page.html',
  styleUrls: ['./cinco.page.scss'],
})
export class CincoPage implements OnInit {
  boton = ['Aceptar'];
  constructor(private alertController: AlertController) { }

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


}
