import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaTechnicalLead4Component } from './va-technical-lead4.component';

describe('VaTechnicalLead4Component', () => {
  let component: VaTechnicalLead4Component;
  let fixture: ComponentFixture<VaTechnicalLead4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaTechnicalLead4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaTechnicalLead4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
