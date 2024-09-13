import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevePage } from './nueve.page';

describe('NuevePage', () => {
  let component: NuevePage;
  let fixture: ComponentFixture<NuevePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
