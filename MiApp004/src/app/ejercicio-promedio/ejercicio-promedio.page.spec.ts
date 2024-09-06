import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjercicioPromedioPage } from './ejercicio-promedio.page';

describe('EjercicioPromedioPage', () => {
  let component: EjercicioPromedioPage;
  let fixture: ComponentFixture<EjercicioPromedioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioPromedioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
