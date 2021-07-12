import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoDuroComponent } from './disco-duro.component';

describe('DiscoDuroComponent', () => {
  let component: DiscoDuroComponent;
  let fixture: ComponentFixture<DiscoDuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoDuroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoDuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
