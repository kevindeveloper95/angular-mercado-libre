import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudifonosXiaomiRedmiComponent } from './audifonos-xiaomi-redmi.component';

describe('AudifonosXiaomiRedmiComponent', () => {
  let component: AudifonosXiaomiRedmiComponent;
  let fixture: ComponentFixture<AudifonosXiaomiRedmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudifonosXiaomiRedmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudifonosXiaomiRedmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
