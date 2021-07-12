import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayeraComponent } from './playera.component';

describe('PlayeraComponent', () => {
  let component: PlayeraComponent;
  let fixture: ComponentFixture<PlayeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
