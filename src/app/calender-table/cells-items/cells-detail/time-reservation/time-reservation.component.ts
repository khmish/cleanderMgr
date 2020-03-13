import { EventItem } from 'src/app/models/event-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-request.service';
@Component({
  selector: 'app-time-reservation',
  templateUrl: './time-reservation.component.html',
  styleUrls: ['./time-reservation.component.css']
})
export class TimeReservationComponent implements OnInit {
  constructor(private requestService: HttpRequestService) { }
  isSaved=0;

  url="reserved/";
  
  @Output() saved: EventEmitter<number> = new EventEmitter<number>();

  @Input() eventItem: EventItem;//={id:0,state:0,time:null,cleanderId:0};

  resrveBtnStyle=['btn btn-primary','btn btn-danger disabled'];
  resrveBtnName=['حجز','غير متوفر'];
  allowed=this.resrveBtnStyle[0];
  allowedName=this.resrveBtnName[0];
ngOnInit(): void {
    // console.log(this.allowed);
    this.isSaved=0;
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.allowed=(this.eventItem.state==0)?this.resrveBtnStyle[0]:this.resrveBtnStyle[1];
    this.allowedName=(this.eventItem.state==0)?this.resrveBtnName[0]:this.resrveBtnName[1];
  }

  //save the selected date and send the emit to cells detail components=============================
  reserve()
  {
    console.log(this.eventItem.id);
     this.requestService.get(this.url + this.eventItem.id).subscribe((data: any) => {
       console.log(data);
       
      if(data===true)
      {
        console.log("the data " +this.eventItem.id+ " is saved");
        this.isSaved=1;
        this.saved.emit();// emit=============================================
      return data;
        
      }
      console.log("the data " +this.eventItem.id+ " is not saved");

      return data;
    });
    
  }
}
