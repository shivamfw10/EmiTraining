import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfSEComponent } from './head-of-se.component';

describe('HeadOfSEComponent', () => {
  let component: HeadOfSEComponent;
  let fixture: ComponentFixture<HeadOfSEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadOfSEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadOfSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
