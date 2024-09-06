import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ejercicio-promedio',
  templateUrl: './ejercicio-promedio.page.html',
  styleUrls: ['./ejercicio-promedio.page.scss'],
})
export class EjercicioPromedioPage implements OnInit {
  nota1: number = 10;
  nota2: number = 10;
  nota3: number = 10;
  promedio : any = '';
  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }
  async promediar()
  {
    // validar
    // calcular
    this.promedio = ((this.nota1)+(this.nota2)+(this.nota3))/3;

  }
}
