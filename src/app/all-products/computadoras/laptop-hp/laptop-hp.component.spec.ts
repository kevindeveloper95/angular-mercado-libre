import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopHpComponent } from './laptop-hp.component';

describe('LaptopHpComponent', () => {
  let component: LaptopHpComponent;
  let fixture: ComponentFixture<LaptopHpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopHpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
