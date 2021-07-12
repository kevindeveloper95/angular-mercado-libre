import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BocinaComponent } from './bocina.component';

describe('BocinaComponent', () => {
  let component: BocinaComponent;
  let fixture: ComponentFixture<BocinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BocinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BocinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
