import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaTechnicalLead3Component } from './va-technical-lead3.component';

describe('VaTechnicalLead3Component', () => {
  let component: VaTechnicalLead3Component;
  let fixture: ComponentFixture<VaTechnicalLead3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaTechnicalLead3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaTechnicalLead3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
