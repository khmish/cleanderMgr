import { SelectedDateService } from './../../services/selected-date.service';
import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';

import {
  HttpRequestService
} from 'src/app/services/http-request.service';


import {
  map
} from 'rxjs/operators';


@Component({
  selector: 'app-cells-items',
  templateUrl: './cells-items.component.html',
  styleUrls: ['./cells-items.component.scss']
})
export class CellsItemsComponent implements OnChanges {

  get_AllEmployeesAssignments_API_URL = 'SecuritySystemAPI/LocationAssignments/GetAllEmployeesAssignments/';

  @Output() refreshSchedule = new EventEmitter();


  @Input() day: number;
  @Input() month: number;
  @Input() year: number;
  @Input() td; //colnumn of the selected cell
  @Input() dayWeek: number;


  badge_color: string = 'badge-default';

  date = new Date();

  currentYear: number = this.date.getFullYear();
  currentMonth: number = this.date.getMonth() + 1;
  currentday: number = this.date.getDate();

  NameOfDay = '';
  TypeOfDay = '';



  constructor(private selectedDateService: SelectedDateService, private requestService: HttpRequestService) //the service is for setting day in order to show it in cell detail
  {}

  refresh_Schedule() {
    this.refreshSchedule.emit();
  }

  isClickableDay() {


  }

  


  ngOnChanges(): void {
    this.CalenderBackgroundColor();
    //Enable or Disable icon
    this.busyDay();
  }

  ngOnDestroy(): void {
    //default background
    this.td.style.background = '#ffffff';
  }

  setData() {

    this.selectedDateService.setDay(this.day);
    this.selectedDateService.setMonth(this.month);
    this.selectedDateService.setYear(this.year);

    //start:  Name of Day
    switch (this.dayWeek) {
      case 5:
        this.NameOfDay = 'Fri'
        break;

      case 6:
        this.NameOfDay = 'Sat'
        break;

      default:
        this.NameOfDay = '';
        break;
    }
    //end: Name of Day



   

  }

  //set and pass the selectd date values to selectedDateService
  onClick() {
    this.setData();
    
    
  }

    

  busyDay() {

    const DateOfDay = this.year + '-' + this.month + '-' + this.day;
      // if (length === 0) {
      //   this.badge_color = 'badge-default'; // لم يتم جدولة اليوم
      // } else if (totalAssign === length) {
      //   this.badge_color = 'badge-danger'; // تم جدولة اليوم مسبقا
      // } else {
      //   this.badge_color = 'badge-warning'; // اعادة جدولة اليوم
      // }
    

  }
 

  CalenderBackgroundColor() {
    //change background current day 
    if (((this.currentday == this.day) && (this.currentYear == this.year) && (this.currentMonth == this.month))) {
      this.td.style.background = '#e3e5f5';
    }
    //change background weekend
    else if (this.dayWeek == 5 || this.dayWeek == 6) {
      this.td.style.background = '#f3e5f5';
    }
    //default background 
    else {
      this.td.style.background = '#ffffff';
    }
  }

  

  isBetween(startDate: Date, endDate: Date, date: Date) {
    if (date >= startDate && date <= endDate) {
      return true;
    }
    return false;
  }

}
