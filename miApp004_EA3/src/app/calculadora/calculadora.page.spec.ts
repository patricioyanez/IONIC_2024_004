import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { CalculadoraPage } from './calculadora.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

describe('=== Formulario Calculadora:', () => {
  let component: CalculadoraPage;
  let fixture: ComponentFixture<CalculadoraPage>;

  beforeEach(waitForAsync(async () => {

    await TestBed.configureTestingModule({
      declarations: [CalculadoraPage],
      imports: [IonicModule.forRoot(), FormsModule]
    }).compileComponents();


    fixture = TestBed.createComponent(CalculadoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })  );

  it('Botón sumar', fakeAsync( () => {
    fixture.componentInstance.n1 = 5;
    fixture.componentInstance.n2 = 3;

    document.getElementById("btnSumar")?.click();
    fixture.detectChanges();
    tick();

    const valor =(<HTMLInputElement>document.getElementById("resultado")).value;
    expect(valor).toEqual("8")
  }));

  /*
Ejercicio 45:
  Crear boton para -,/ y * y aplicar pruebas e2e
*/
});
