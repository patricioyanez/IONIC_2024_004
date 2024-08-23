import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DosPage } from './dos.page';

describe('DosPage', () => {
  let component: DosPage;
  let fixture: ComponentFixture<DosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
