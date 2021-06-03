import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderofertasComponent } from './headerofertas.component';

describe('HeaderofertasComponent', () => {
  let component: HeaderofertasComponent;
  let fixture: ComponentFixture<HeaderofertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderofertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderofertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
