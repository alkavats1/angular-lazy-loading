import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoading2Component } from './lazy-loading2.component';

describe('LazyLoading2Component', () => {
  let component: LazyLoading2Component;
  let fixture: ComponentFixture<LazyLoading2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoading2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoading2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
