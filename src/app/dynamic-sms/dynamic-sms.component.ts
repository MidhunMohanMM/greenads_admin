import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import {IMyDpOptions, MyDatePicker} from 'mydatepicker';

@Component({
  selector: 'app-dynamic-sms',
  templateUrl: './dynamic-sms.component.html',
  styleUrls: ['./dynamic-sms.component.css']
})
export class DynamicSmsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#showDayTime").hide();
  }
  
  myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    disableUntil: {year: 2016, month: 8, day: 10},
    openSelectorTopOfInput:true,
   
    alignSelectorRight:false,
    openSelectorOnInputClick:true,
};
  showDayTime(){
    $("#showDayTime").show();
  }
  hideDayTime(){
    $("#showDayTime").hide();
  }
}
