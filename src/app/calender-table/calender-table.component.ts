import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';



import {
  HttpRequestService
} from '../services/http-request.service';
import {
  map
} from 'rxjs/operators';


@Component({
  selector: 'app-calender-table',
  templateUrl: './calender-table.component.html',
  styleUrls: ['./calender-table.component.scss']
})
export class CalenderTableComponent implements OnInit {

  superAdmin: boolean = false;

  @ViewChild('month_tag') monthDropDownList: any ;
  @ViewChild('year_tag') yearDropDownList: any;
  


  // getCity_API_URL = "SecuritySystemAPI/cities/GetAllcities/";


  isLoading: boolean = false;


  date = new Date();

  year: number = this.date.getFullYear();
  month: number = this.date.getMonth() + 1;


  firstDay: number; //first day in the selected month 0-6 where 6= Saturday and 0= Sunday
  lastDay: number; //last day in the selected month 0-6 where 6= Saturday and 0= Sunday

  totalDays: number; //total days in the selected month
  counterDays: number = 1;

  flag = 1; //to check if the day cells items eqauls the number of days in a month (counterDays!=totalDays =>0) (counterDays==totalDays =>1)

  showBranches = false;
  showLocations = false;
  showButtonSearch = false;

  MessegeShown: boolean = false;
  MessegeType: number = -1;
  MessegeBody: string = "";
  MessegeTime: number = 3000;

  locations: any[];

  months = [{
      ID: 1,
      Name: "يناير",
      disabled: false
    },
    {
      ID: 2,
      Name: "فبراير",
      disabled: false
    },
    {
      ID: 3,
      Name: "مارس",
      disabled: false
    },
    {
      ID: 4,
      Name: "إبريل",
      disabled: false
    },
    {
      ID: 5,
      Name: "مايو",
      disabled: false
    },
    {
      ID: 6,
      Name: "يونيو",
      disabled: false
    },
    {
      ID: 7,
      Name: "يوليو",
      disabled: false
    },
    {
      ID: 8,
      Name: "اغسطس",
      disabled: false
    },
    {
      ID: 9,
      Name: "سبتمبر",
      disabled: false
    },
    {
      ID: 10,
      Name: "اكتوبر",
      disabled: false
    },
    {
      ID: 11,
      Name: "نوفمبر",
      disabled: false
    },
    {
      ID: 12,
      Name: "ديسمبر",
      disabled: false
    }
  ];

  years = [{
      ID: 2019,
      Name: "2019"
    },
    {
      ID: 2020,
      Name: "2020"
    },
    {
      ID: 2021,
      Name: "2021"
    },
    {
      ID: 2022,
      Name: "2022"
    },
    {
      ID: 2023,
      Name: "2023"
    },
    {
      ID: 2024,
      Name: "2024"
    },
    {
      ID: 2025,
      Name: "2025"
    },
    {
      ID: 2026,
      Name: "2026"
    },
    {
      ID: 2027,
      Name: "2027"
    },
    {
      ID: 2028,
      Name: "2028"
    },
    {
      ID: 2029,
      Name: "2029"
    }
  ];

  weeks = [0, 1, 2, 3, 4];
  days = [0, 1, 2, 3, 4, 5, 6];


  constructor(private requestService: HttpRequestService) {

  }

  ngOnInit() {
    
    this.yearDropDownList=(this.year);
    this.monthDropDownList=(this.month);
    // this.isAllowedMonth();

    
  }
  //increment calender days in the table
  counter() {

    if (this.counterDays == this.totalDays) {
      this.flag = 1; //disable schedule
    }
    return this.counterDays++;
  }
  resetCount() {
    this.flag = 0; //enable schedule
    this.counterDays = 1; //disable schedule

  }
  //initialise the date values in order to use them
  calendAdj() {
    this.firstDay = new Date(this.year, this.month - 1, 1).getDay();
    this.lastDay = new Date(this.year, this.month + 1, 0).getDay();
    this.totalDays = new Date(this.year, (this.month), 0).getDate();


    //check if the month 6 weeks or 5
    switch (this.firstDay) {
      case 5:
        if (this.totalDays == 30) {
          this.weeks = [0, 1, 2, 3, 4];
        } else {
          this.weeks = [0, 1, 2, 3, 4, 5];
        }
        break;

      case 6:
        if (this.totalDays > 29) {
          this.weeks = [0, 1, 2, 3, 4, 5];
        }
        break;

      default:
        this.weeks = [0, 1, 2, 3, 4];
        break;
    }

  }

  //search by month and year and pass parameter to cell detail component 
  search() {
    
  }

  getSelected_MonthAndYear() {
    this.month = this.monthDropDownList.getSelected();
    this.year = this.yearDropDownList.getSelected();

    this.calendAdj();
  }

  //when the user selected a year this event will fire up
  onChangeYear() {

    if (this.date.getFullYear() == this.yearDropDownList.getSelected()) {
      this.monthDropDownList.setSelected(this.date.getMonth() + 1);
    }else{
      this.monthDropDownList.setSelected(null);
    }

    this.isAllowedMonth();
    this.flag = 1;//disable schedule
  }
 //when the user selected a month this event will fire up
  onChangeMonth(){
    this.flag = 1;//disable schedule
  }

  //return only months from the current month on .. and disabled the previous months
  isAllowedMonth() {

    const currentDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);

    for (let index = 0; index < this.months.length; index++) {
      if (this.date.getFullYear() >= this.yearDropDownList.getSelected()) {
        const selectDate = new Date(this.yearDropDownList.getSelected(), (this.months[index].ID - 1), 1);
        
        if ( selectDate < currentDate) {
          this.months[index].disabled = true;
        } else {
          this.months[index].disabled = false;
        }
      } else {
        this.months[index].disabled = false;
      }

    }

  }

  //when the user selected a city this event will fire up
  onChangeCity() {

    

  }

  //when the user selected a branch this event will fire up
  onChangeBranch() {
    

  }

  onChangeLocation(){
    
  }

  // //return location setting for selecte location
  // getLocationSetting(locationID: any) {
  //   return this.requestService.get(this.getLocationSettingByLocationId_API_URL + Guid.raw() + '/' + locationID).pipe(map((data: LocationSettingsInfo) => {
  //     return data
  //   })).toPromise();
  // }

  //return dates setting for select year
  getDatesSetting(year: any) {
    // return this.requestService.get(this.getDatesSettingByYear + Guid.raw() + '/' + year).pipe(map((data: DatesSettingsInfo) => {
    //   return data
    // })).toPromise();
  }
  
  //return settings for schedule
  async getSetting(locationID: any){
    // this.isLoading = true;

    // this.locationSetting = await this.getLocationSetting(locationID);
    // this.datesSetting = await this.getDatesSetting(this.yearDropDownList.getSelected());

    //   if (this.datesSetting != null && this.locationSetting != null) {
    //     this.MessegeShown = false;
        

    //     //annual vacation setting
    //     this.annualVacationStart = new Date(this.datesSetting[0].AnnualVacationTrainingstaffStart);
    //     this.annualVacationEnd = new Date(this.datesSetting[0].AnnualVacationTrainingstaffEnd);

    //     //half annual vaction setting
    //     this.halfAnnualVacationStart = new Date(this.datesSetting[0].HalfAnnualVacationTrainingstaffStart);
    //     this.halfAnnualVacationEnd = new Date(this.datesSetting[0].HalfAnnualVacationTrainingstaffEnd);

    //     //ramadan setting
    //     this.ramadanStart = new Date(this.datesSetting[0].RamadanStartDate);
    //     this.ramadanEnd = new Date(this.datesSetting[0].RamadanEndDate);


    //     //eid adha setting
    //     this.eidAdhaStart = new Date(this.datesSetting[0].EidAdhaStartDate);
    //     this.eidAdhaEnd = new Date(this.datesSetting[0].EidAdhaEndDate);


    //     //eid fater setting
    //     this.eidFatrStart = new Date(this.datesSetting[0].EidFatrStartDate);
    //     this.eidFatrEnd = new Date(this.datesSetting[0].EidFatrEndDate);

    //     //national day
    //     this.nationalVacationStart = new Date(this.datesSetting[0].NationalDayStart);
    //     this.nationalVacationEnd = new Date(this.datesSetting[0].NationalDayEnd);

    //     //show schedule
    //     this.getSelected_MonthAndYear();
    //     this.flag = 0; //enable schedule

    //   }else{
    //     //print message 
    //     this.flag = 1; //disable schedule
    //     let msgBody = 'لا يوجد إعدادات للبيانات التالية:'+'<br>';
    //     msgBody += this.locationSetting == null? 'للموقع ('+ this.locationDropDownList.getSelectecdItemByID().Name+ ').'+'<br>' : '';
    //     msgBody += this.datesSetting == null? 'لسنة ' + this.yearDropDownList.getSelectecdItemByID().Name : ''; 
    //     this.showSystemMessage(1, msgBody, true);
    //   }
    //   this.isLoading = false;

  }

  // private showSystemMessage(msgType, msgBody, stopTimer: boolean = false) { //show either success msg or error msg with timer
  //   this.MessegeShown = true;
  //   this.MessegeType = msgType;
  //   this.MessegeBody = msgBody;
  //   stopTimer? '' : this.SetTimer();
  // }

  // SetTimer() {
  //   setTimeout(() => {
  //     this.MessegeShown = false;
  //   }, this.MessegeTime);
  // }

}
