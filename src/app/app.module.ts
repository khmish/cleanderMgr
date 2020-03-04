import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderTableComponent } from './calender-table/calender-table.component';
import { CellsItemsComponent } from './calender-table/cells-items/cells-items.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderTableComponent,
    CellsItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
