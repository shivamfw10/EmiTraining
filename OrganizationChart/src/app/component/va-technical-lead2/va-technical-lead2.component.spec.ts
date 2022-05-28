import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaTechnicalLead2Component } from './va-technical-lead2.component';

describe('VaTechnicalLead2Component', () => {
  let component: VaTechnicalLead2Component;
  let fixture: ComponentFixture<VaTechnicalLead2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaTechnicalLead2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaTechnicalLead2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
