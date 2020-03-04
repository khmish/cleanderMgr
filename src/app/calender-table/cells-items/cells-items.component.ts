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

  //location Setting


  //Annual vacation
  @Input() annualVacationStart: Date = null;
  @Input() annualVacationEnd: Date = null;

  //Half annual vacation
  @Input() halfAnnualVacationStart: Date = null;
  @Input() halfAnnualVacationEnd: Date = null;

  //National vacation
  @Input() nationalVacationStart: Date = null;
  @Input() nationalVacationEnd: Date = null;

  //ramadan
  @Input() ramadanStart: Date = null;
  @Input() ramadanEnd: Date = null;


  //eid Adha
  @Input() eidAdhaStart: Date = null;
  @Input() eidAdhaEnd: Date = null;

  //eid Fatr
  @Input() eidFatrStart: Date = null;
  @Input() eidFatrEnd: Date = null;

  //Icon
  annualVacationIcon: boolean = false;
  halfAnnualVacationIcon: boolean = false;
  ramadanIcon: boolean = false;
  eidAdhaIcon: boolean = false;
  eidFatrIcon: boolean = false;
  nationalVacationIcon: boolean = false;

  badge_color: string = 'badge-default';

  date = new Date();

  currentYear: number = this.date.getFullYear();
  currentMonth: number = this.date.getMonth() + 1;
  currentday: number = this.date.getDate();

  NameOfDay = '';
  TypeOfDay = '';



  constructor( private requestService: HttpRequestService) //the service is for setting day in order to show it in cell detail
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



    this.getEmployeeAssign();

  }

  //set and pass the selectd date values to selectedDateService
  onClick() {
    
  }

  getEmployeeAssign() {


    // this.requestService.post(this.get_AllEmployeesAssignments_API_URL, this.locationAssignments)
    //   .subscribe(async (result: Promise < LocationAssignmentsInfo[] > ) => {
    //     if (result) {
    //       const data =  await result;
    //       data.forEach(x=>{
    //         this.EmployeesAssignments.push(x);
    //       })
    //       this.selectedDateService.setEmployyeAssign(this.EmployeesAssignments);

    //       this.locationSetting.ShiftNumber >= 1 ? this.getEmployeeAssignSelected(1) : '';
    //       this.locationSetting.ShiftNumber >= 2 ? this.getEmployeeAssignSelected(2) : '';
    //       this.locationSetting.ShiftNumber >= 3 ? this.getEmployeeAssignSelected(3) : '';
    //       this.locationSetting.ShiftNumber >= 4 ? this.getEmployeeAssignSelected(4) : '';
    //     }
    //   });


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
