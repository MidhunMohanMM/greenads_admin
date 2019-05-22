import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from "jquery";
import axios from "axios";
import Swal from 'sweetalert2';
import {IMyDpOptions, MyDatePicker} from 'mydatepicker';

@Component({
  selector: 'app-group-sms',
  templateUrl: './group-sms.component.html',
  styleUrls: ['./group-sms.component.css']
})
export class GroupSmsComponent implements OnInit {
  sent_numbers: any; sms_content: any; 
  invalide_number: [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    $("#addNumber2").hide();
    $("#smfileup").hide();
    $("#addNumber1").hide();
    $("#showDayTime").hide();
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  
  


  number_chech(e){
    $("#quantity").keypress(function (e) {
      //if the letter is not digit then display error and don't type anything
      if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57 ) && e.which !=44) {
         //display error message
         $("#errmsg").html("Digits Only").show().fadeOut("slow");
                return false;
     }
    });
  
  }
  invalide_numbers(){
  // Swal({
  //   title: '<strong>HTML <u>example</u></strong>',
  //   type: 'info',
  //   html:
  //     'Numbers are <b id="testNu"></b>, ',
  //   showCloseButton: true,
  //   showCancelButton: true,
  //   focusConfirm: false,
  //   confirmButtonText:
  //     '<i class="fa fa-thumbs-up"></i> ',
    
  
  // })
}
charcount(){
$(document).ready(function(){
    var $remaining = $('#remaining'),
        $messages = $remaining.next(),
        $chartotal = $('#chartotal');
    $('#message').keyup(function(){
        var chars = this.value.length,
            messages = Math.ceil(chars / 160),
            remaining = messages * 160 - (chars % (messages * 160) || messages * 160),
            chartotal = chars;
        $remaining.text(' characters remaining :'+remaining  );
        $chartotal.text(' total character :'+chartotal);
        $messages.text(' messages :'+messages );
    });

});
}
  sent_sms(){

    console.log(this.sent_numbers)
    if(!this.sent_numbers){
      $("#valide_number_error").html("Please enter number.").show().fadeOut(2000);
    }else if(!this.sms_content){
      $("#valide_content_error").html("Please enter content.").show().fadeOut(2000);
    }else{
   var valide_number =[];
  var invalide_number1=[];
//   console.log(this.sent_numbers);
    var str = this.sent_numbers;
     var res = str.split(",");

     let i;
     for(i=0;i<res.length;i++){

      if(res[i].length == 10){

        valide_number.push(res[i])
      
      }else{
        console.log("invalide");
        invalide_number1.push(res[i])
        
        localStorage.setItem('invalidenumbers', JSON.stringify(invalide_number1));
        this.invalide_number = JSON.parse(localStorage.getItem('invalidenumbers'));
      //  console.log(this.invalide_number)
       // self.invalide_number = invalide_number1
       if( this.invalide_number.length != 0){
         $("#not_sent_number").show();

       }else{
        $("#not_sent_number").hide();
       }
      }

     }
     console.log(valide_number);
    //  console.log(this.invalide_number.length);
    

     var self = this;
     var sms_data ={
        "to": valide_number,
        "content": this.sms_content
     }
     console.log(sms_data);

     axios.post('http://103.214.233.141:3003/v1/secure/smsbulk',sms_data
     ).then(function (res) {
 
       console.log(res);
       Swal({
        position: 'top-end',
        type: 'success',
        title: 'Message Sent.',
        showConfirmButton: false,
        timer: 1500
      })
          
     })
     .catch(function (error) {
       console.log(error);
     });
    }
 
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
  addNum1(){
    $("#addNumber2").hide();
    $("#smfileup").hide();
    $("#addNumber1").show();
  }
  addNum2(){
    $("#addNumber2").show();
    $("#smfileup").hide();
    $("#addNumber1").hide();
  }
  addNum3(){
    $("#addNumber2").hide();
    $("#smfileup").show();
    $("#addNumber1").hide();
  }
  showDayTime(){
    $("#showDayTime").show();
  }
  hideDayTime(){
    $("#showDayTime").hide();
  }
}
