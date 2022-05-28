import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaTechnicalLead1Component } from './va-technical-lead1.component';

describe('VaTechnicalLead1Component', () => {
  let component: VaTechnicalLead1Component;
  let fixture: ComponentFixture<VaTechnicalLead1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaTechnicalLead1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaTechnicalLead1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
