import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamarraComponent } from './chamarra.component';

describe('ChamarraComponent', () => {
  let component: ChamarraComponent;
  let fixture: ComponentFixture<ChamarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamarraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
