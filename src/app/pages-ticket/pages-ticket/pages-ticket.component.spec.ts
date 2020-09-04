import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTicketComponent } from './pages-ticket.component';

describe('PagesTicketComponent', () => {
  let component: PagesTicketComponent;
  let fixture: ComponentFixture<PagesTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
