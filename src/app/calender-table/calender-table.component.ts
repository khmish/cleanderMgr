import { CleanderEvent } from './../models/cleander-event';
import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef
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

  url="cleander";

  @ViewChild('month_tag') monthDropDownList: any ;
  @ViewChild('year_tag') yearDropDownList: any;
  
  isLoading: boolean = false;

  date = new Date();

  year: number = this.date.getFullYear();
  month: number = this.date.getMonth() + 1;


  firstDay: number; //first day in the selected month 0-6 where 6= Saturday and 0= Sunday
  lastDay: number; //last day in the selected month 0-6 where 6= Saturday and 0= Sunday

  totalDays: number; //total days in the selected month
  counterDays: number = 1;
  countNum=0;

  flag = 0; //to check if the day cells items eqauls the number of days in a month (counterDays!=totalDays =>0) (counterDays==totalDays =>1)

  clndrEvntarry:CleanderEvent[]=[];

  weeks = [0, 1, 2, 3, 4];
  days = [0, 1, 2, 3, 4, 5, 6];


  constructor(private cdr: ChangeDetectorRef,private requestService: HttpRequestService) {
    // this.search();


    // let lng=new Date(this.year, (this.month), 0).getDate();
    // for (let index = 0; index < lng; index++) {
    //   this.clndrEvntarry[index]={id:index,date:new Date(this.year, this.month - 1, index+1),state:0,user:0};
      
    // }
  }
  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
 }
  ngOnChange(){
    // this.search();
  }
  ngOnInit() {
    

    // this.isAllowedMonth();
    // setTimeout(function(){  }, 3000);
    this.search();
    this.calendAdj();
    
    // this.search();
    
    
    
  }
  //increment calender days in the table
  counter() {

    if (this.counterDays == this.totalDays) {
      // this.flag = 1; //disable schedule
    }
  this.countNum++;

    return this.counterDays++;
  }
  resetCount() {
    // this.flag = 0; //enable schedule
    this.countNum=0;
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
    return this.requestService.get(this.url ).pipe(map((data: CleanderEvent[]) => {
      
      this.clndrEvntarry=data;
      // console.log(this.clndrEvntarry);
      
      // setTimeout(function(){ 
      //  }, 1000);
      this.flag = 1;
          return data
        })).toPromise();
  }
  updateFlag(){
    this.flag=(this.flag==0)?1:0;
    
  }

}
