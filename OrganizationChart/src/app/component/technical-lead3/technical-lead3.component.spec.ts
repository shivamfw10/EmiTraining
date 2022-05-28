import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalLead3Component } from './technical-lead3.component';

describe('TechnicalLead3Component', () => {
  let component: TechnicalLead3Component;
  let fixture: ComponentFixture<TechnicalLead3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalLead3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalLead3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
