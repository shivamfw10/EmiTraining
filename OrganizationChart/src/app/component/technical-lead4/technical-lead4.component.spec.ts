import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalLead4Component } from './technical-lead4.component';

describe('TechnicalLead4Component', () => {
  let component: TechnicalLead4Component;
  let fixture: ComponentFixture<TechnicalLead4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalLead4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalLead4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
