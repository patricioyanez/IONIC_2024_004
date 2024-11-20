import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
// npm test
describe('HomePage ts: ', () => {
  let component: HomePage;

  beforeEach(async () => {
    component = new HomePage();
  });

  it('sumar: sumar 2 numeros positivos', () => {
    expect(component.sumar(2,4)).toEqual(6);
  });
  
  it('sumar: sumar 2 numeros negativos', () => {
    expect(component.sumar(-2,-6)).toEqual(-8);
  });

  it('sumar: sumar 2 numeros, el 2do es negativo', () => {
    expect(component.sumar(10,-6)).toBeGreaterThanOrEqual(0);
  });
});
