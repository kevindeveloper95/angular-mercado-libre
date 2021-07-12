import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentiladorPcComponent } from './ventilador-pc.component';

describe('VentiladorPcComponent', () => {
  let component: VentiladorPcComponent;
  let fixture: ComponentFixture<VentiladorPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentiladorPcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentiladorPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
