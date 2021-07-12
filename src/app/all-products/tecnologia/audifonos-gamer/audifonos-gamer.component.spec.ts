import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudifonosGamerComponent } from './audifonos-gamer.component';

describe('AudifonosGamerComponent', () => {
  let component: AudifonosGamerComponent;
  let fixture: ComponentFixture<AudifonosGamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudifonosGamerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudifonosGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
