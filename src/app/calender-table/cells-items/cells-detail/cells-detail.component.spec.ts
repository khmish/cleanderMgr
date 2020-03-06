import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellsDetailComponent } from './cells-detail.component';

describe('CellsDetailComponent', () => {
  let component: CellsDetailComponent;
  let fixture: ComponentFixture<CellsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
