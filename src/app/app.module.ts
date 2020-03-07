import { CellsDetailComponent } from './calender-table/cells-items/cells-detail/cells-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderTableComponent } from './calender-table/calender-table.component';
import { CellsItemsComponent } from './calender-table/cells-items/cells-items.component';
import { TimeReservationComponent } from './calender-table/cells-items/cells-detail/time-reservation/time-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderTableComponent,
    CellsItemsComponent,
    CellsDetailComponent,
    TimeReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
