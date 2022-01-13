import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronaComponent } from './crona.component';

describe('CronaComponent', () => {
  let component: CronaComponent;
  let fixture: ComponentFixture<CronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
