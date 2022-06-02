import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterboxComponent } from './outerbox.component';

describe('OuterboxComponent', () => {
  let component: OuterboxComponent;
  let fixture: ComponentFixture<OuterboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
