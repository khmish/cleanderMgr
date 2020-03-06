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

  add_LocationAssignment_API_URL = 'SecuritySystemAPI/LocationAssignments/AddLocationAssignment/';
  update_LocationAssignment_API_URL = 'SecuritySystemAPI/LocationAssignments/UpdateLocationAssignment/';

  @Output() is_Save = new EventEmitter();

  


  
  button_label = 'حفظ';

  isSave: boolean = true;

  MessegeShown: boolean = false;
  MessegeType: number = -1;
  MessegeBody: string = "";
  MessegeTime: number = 5000;



  dayNum: number; //value of selected day
  monthNum: number; //value of selected month
  yearNum: number; //value of selected year

  



  constructor(private selectedDateService: SelectedDateService, private requestService: HttpRequestService) {}

  onClose() {
    // this.is_Save.emit(this.yearNum + '-' + this.monthNum + '-' + this.dayNum);
   
    this.is_Save.emit();
    
    this.isSave = true;
  }

  ngOnInit() {
    this.getDataForSelectedDay();
  }


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
console.log(this.yearNum+" /"+this.monthNum+" /"+this.dayNum);

  }

  


  
  

 



  
}
