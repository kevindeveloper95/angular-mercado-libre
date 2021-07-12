import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenisJordanComponent } from './tenis-jordan.component';

describe('TenisJordanComponent', () => {
  let component: TenisJordanComponent;
  let fixture: ComponentFixture<TenisJordanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenisJordanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenisJordanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
