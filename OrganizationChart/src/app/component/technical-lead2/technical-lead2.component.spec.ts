import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalLead2Component } from './technical-lead2.component';

describe('TechnicalLead2Component', () => {
  let component: TechnicalLead2Component;
  let fixture: ComponentFixture<TechnicalLead2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalLead2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalLead2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
