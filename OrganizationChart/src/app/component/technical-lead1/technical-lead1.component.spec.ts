import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalLead1Component } from './technical-lead1.component';

describe('TechnicalLead1Component', () => {
  let component: TechnicalLead1Component;
  let fixture: ComponentFixture<TechnicalLead1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalLead1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalLead1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
