import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pages1Component } from './pages1.component';

describe('Pages1Component', () => {
  let component: Pages1Component;
  let fixture: ComponentFixture<Pages1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pages1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pages1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
