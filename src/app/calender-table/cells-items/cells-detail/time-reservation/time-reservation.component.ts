import { EventItem } from 'src/app/models/event-item';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-time-reservation',
  templateUrl: './time-reservation.component.html',
  styleUrls: ['./time-reservation.component.css']
})
export class TimeReservationComponent implements OnInit {
  constructor() { }
  
  
  @Input() eventItem: EventItem;//={id:0,state:0,time:null,cleanderId:0};
  resrveBtnStyle=['btn btn-primary','btn btn-danger disabled'];
  resrveBtnName=['حجز','غير متوفر'];
  allowed=this.resrveBtnStyle[0];
  allowedName=this.resrveBtnName[0];
ngOnInit(): void {
    // console.log(this.allowed);
    
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.allowed=(this.eventItem.state==0)?this.resrveBtnStyle[0]:this.resrveBtnStyle[1];
    this.allowedName=(this.eventItem.state==0)?this.resrveBtnName[0]:this.resrveBtnName[1];
  }
}
