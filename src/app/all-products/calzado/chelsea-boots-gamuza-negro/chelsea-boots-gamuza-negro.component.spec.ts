import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChelseaBootsGamuzaNegroComponent } from './chelsea-boots-gamuza-negro.component';

describe('ChelseaBootsGamuzaNegroComponent', () => {
  let component: ChelseaBootsGamuzaNegroComponent;
  let fixture: ComponentFixture<ChelseaBootsGamuzaNegroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChelseaBootsGamuzaNegroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChelseaBootsGamuzaNegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
