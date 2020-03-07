import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeReservationComponent } from './time-reservation.component';

describe('TimeReservationComponent', () => {
  let component: TimeReservationComponent;
  let fixture: ComponentFixture<TimeReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
