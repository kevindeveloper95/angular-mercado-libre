import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaTvComponent } from './pantalla-tv.component';

describe('PantallaTvComponent', () => {
  let component: PantallaTvComponent;
  let fixture: ComponentFixture<PantallaTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
