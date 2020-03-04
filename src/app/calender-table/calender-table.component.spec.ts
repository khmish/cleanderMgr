import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderTableComponent } from './calender-table.component';

describe('CalenderTableComponent', () => {
  let component: CalenderTableComponent;
  let fixture: ComponentFixture<CalenderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
