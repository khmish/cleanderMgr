import { EventItem } from 'src/app/models/event-item';
import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';

import {
  HttpRequestService
} from 'src/app/services/http-request.service';
import { SelectedDateService } from 'src/app/services/selected-date.service';


@Component({
  selector: 'app-cells-detail',
  templateUrl: './cells-detail.component.html',
  styleUrls: ['./cells-detail.component.scss']
})
export class CellsDetailComponent implements OnInit {


  URL = 'events/';

  @Output() is_Save: EventEmitter<number> = new EventEmitter<number>();

  events: EventItem[] = [];

  button_label = 'حفظ';

  isSave: boolean = true;


  dayNum: number = sessionStorage.day; //value of selected day
  monthNum: number = sessionStorage.month; //value of selected month
  yearNum: number = sessionStorage.year; //value of selected year


  cleanderId: number = sessionStorage.cleanderEvent;//

  //to refresh the current page
  flag = 0;
  subscription: any;

  constructor(private selectedDateService: SelectedDateService, private requestService: HttpRequestService) {

  }

  // send back an emit to parents components to refresh the cleander================================================
  onClose() {
    this.is_Save.emit(1);
    sessionStorage.closed = 1;
    this.isSave = true;
  }


  ngOnInit() {
    this.getDataForSelectedDay();
    // console.log('detail ' + this.cleanderId);

  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.getDataForSelectedDay();


  }

  // fetch the data that came from calender table component======================================
  getDataForSelectedDay() {

    //get from selectedDateService the selected day
    this.selectedDateService.getDay()
      .subscribe((day: number) => this.dayNum = day);

    //get from selectedDateService the selected month
    this.selectedDateService.getMonth()
      .subscribe((month: number) => this.monthNum = month);

    //get from selectedDateService the selected year
    this.selectedDateService.getYear()
      .subscribe((year: number) => this.yearNum = year);
    
      //return the id for a day in session to use it to get all events for that id 'id==day'
    let id = sessionStorage.cleanderEvent;
    // console.log(id);

    //use webservice to get the events
    this.subscription = this.requestService.get(this.URL + id).subscribe((data: EventItem[]) => {
      //events
      this.events = data;
     

      this.flag = 1;
      return data;
    });


  }




  //refresh the page when the time reservation compoenets emit!=================================
  savedTime(){
    // this.flag=
    
    // this.is_Save.emit(2);
    this.getDataForSelectedDay();
    this. refreshPag();
  }
  refreshPag()
  {
    this.flag =0;
    setTimeout(() => {
      this.flag = 1;
    }, 100);
  }






}
