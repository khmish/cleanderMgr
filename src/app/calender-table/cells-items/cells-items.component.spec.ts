import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellsItemsComponent } from './cells-items.component';

describe('CellsItemsComponent', () => {
  let component: CellsItemsComponent;
  let fixture: ComponentFixture<CellsItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
