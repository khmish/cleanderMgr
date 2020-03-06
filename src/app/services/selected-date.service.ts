import {
  Injectable,
  EventEmitter
} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SelectedDateService {
  day: EventEmitter < number > = new EventEmitter();
  month: EventEmitter < number > = new EventEmitter();
  year: EventEmitter < number > = new EventEmitter();
 


  constructor() {}

  
  

  setDay(day: number) {
    this.day.emit(day);
  }
  getDay() {
    return this.day;
  }
  setMonth(month: number) {
    this.month.emit(month);
  }
  getMonth() {
    return this.month;
  }

  setYear(year: number) {
    this.year.emit(year);
  }
  getYear() {
    return this.year;
  }

}
