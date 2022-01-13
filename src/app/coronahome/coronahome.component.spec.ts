import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronahomeComponent } from './coronahome.component';

describe('CoronahomeComponent', () => {
  let component: CoronahomeComponent;
  let fixture: ComponentFixture<CoronahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronahomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
