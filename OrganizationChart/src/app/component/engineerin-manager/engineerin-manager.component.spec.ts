import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerinManagerComponent } from './engineerin-manager.component';

describe('EngineerinManagerComponent', () => {
  let component: EngineerinManagerComponent;
  let fixture: ComponentFixture<EngineerinManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerinManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerinManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
