import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxSeriesXComponent } from './xbox-series-x.component';

describe('XboxSeriesXComponent', () => {
  let component: XboxSeriesXComponent;
  let fixture: ComponentFixture<XboxSeriesXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XboxSeriesXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxSeriesXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
