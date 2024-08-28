import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuatroPage } from './cuatro.page';

describe('CuatroPage', () => {
  let component: CuatroPage;
  let fixture: ComponentFixture<CuatroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuatroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
