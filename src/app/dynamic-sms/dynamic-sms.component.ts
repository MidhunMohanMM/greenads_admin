import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import {IMyDpOptions, MyDatePicker} from 'mydatepicker';
import { DataservicesService } from '../services/dataservices/dataservices.service';

@Component({
  selector: 'app-dynamic-sms',
  templateUrl: './dynamic-sms.component.html',
  styleUrls: ['./dynamic-sms.component.css']
})
export class DynamicSmsComponent implements OnInit {
  public TableDatas ;
  public TableDatasById;
  load_data =  false;
  load_template_data = false;
  templates = [];
  templateVariables = [];

  constructor(
    private _configs: DataservicesService
  ) { }

  ngOnInit() {
    $("#showDayTime").hide();
    this._configs.getUsersData().then(rsp => {
      this.TableDatas = rsp;
      console.log(this.TableDatas);
      this.load_data = true;
  });

var self = this;
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
  templateSelected(event){
    
    console.log(this.templates);
    this._configs.gettemplatesDatabyId(this.templates).then(rsp => {
      this.TableDatasById = rsp;
      console.log(this.TableDatasById.content);
      $('#Message').html(this.TableDatasById.content);
      // $('#Message').attr('readonly', true);
      this.templateVariables = this.TableDatasById.variables.split(',');
      console.log(this.templateVariables);
      this.load_template_data = true;

     
  });
  }

  vartyping(event){
    
    console.log(event.target.id);
  }
}
