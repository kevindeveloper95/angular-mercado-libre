import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaladroComponent } from './taladro.component';

describe('TaladroComponent', () => {
  let component: TaladroComponent;
  let fixture: ComponentFixture<TaladroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaladroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaladroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
