import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaGatoComponent } from './arena-gato.component';

describe('ArenaGatoComponent', () => {
  let component: ArenaGatoComponent;
  let fixture: ComponentFixture<ArenaGatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArenaGatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
