import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringDirectorComponent } from './engineering-director.component';

describe('EngineeringDirectorComponent', () => {
  let component: EngineeringDirectorComponent;
  let fixture: ComponentFixture<EngineeringDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeringDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
