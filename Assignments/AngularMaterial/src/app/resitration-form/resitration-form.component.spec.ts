import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResitrationFormComponent } from './resitration-form.component';

describe('ResitrationFormComponent', () => {
  let component: ResitrationFormComponent;
  let fixture: ComponentFixture<ResitrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResitrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResitrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
