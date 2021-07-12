import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarraElectricaComponent } from './guitarra-electrica.component';

describe('GuitarraElectricaComponent', () => {
  let component: GuitarraElectricaComponent;
  let fixture: ComponentFixture<GuitarraElectricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarraElectricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarraElectricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
