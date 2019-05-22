import { Component, OnInit ,OnDestroy} from '@angular/core';
import {IMyDpOptions, MyDatePicker} from 'mydatepicker';
import { Router } from '@angular/router';
import $ from "jquery";
import axios from "axios";
import Swal from 'sweetalert2'
import {ActivatedRoute} from '@angular/router';
import {TagifyService} from '../../ng-tagify-wrapper/tagify.service';
import {Location} from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable, EMPTY, of } from 'rxjs';
@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.css']
})
export class SendSmsComponent implements OnInit {
  gawcontact:any
  routestypes:any;
  selectedRoute: any = "";
  sent_numbers: any; sms_content: any; 
  value:any;
  gawsendoption: any;
  model: any;
  usersid:any;
  dropdownListNew=[];
  dropdownSettingsNew={};
    invalide_number: [];
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    invalide_len: any;
    gawcontactno: any = "";
    gawcontactgrp: any = "";
    gawcontactfile: any = "";
  to: any;
  usersidname: any;

    constructor(  private route : ActivatedRoute ,  private router: Router, private _location: Location) {
      this.route.params.subscribe(params => {
        // console.log(params);
        this.value = params;
        this.usersid = this.value.id;
        // if(this.usersidname == "User"){
        //   this.usersid = 4;
        // }
        // if(this.usersidname == "Reseller User"){
        //   this.usersid = 5;
        // }
  
 
        });
     }

    ngOnInit() {
      var userdata = JSON.parse(localStorage.getItem('userdata'));
     
      this.usersid = userdata.usersid;
      
      console.log( this.usersid )
      var self = this;
     axios.get('http://103.214.233.141:3003/v1/secure/users/contacts?users[usersid]=1')
     .then(function (res) {
      //  console.log(res);
       self.dropdownListNew = res.data;
     })
     .catch(function (error) {
       console.log(error);
     });
      this.getroutesType();
      $("#showDayTime").hide();
      $("#addNumber2").hide();
      $("#smfileup").hide();
      $("#addNumber1").hide();
      
      // this.dropdownList = [
      //   { item_id: 1, item_text: 'Mumbai' },
      //   { item_id: 2, item_text: 'Bangaluru' },
      //   { item_id: 3, item_text: 'Pune' },
      //   { item_id: 4, item_text: 'Navsari' },
      //   { item_id: 5, item_text: 'New Delhi' }
      // ];
      // this.selectedItems = [
      //   { item_id: 3, item_text: 'Pune' },
      //   { item_id: 4, item_text: 'Navsari' }
      // ];
      this.dropdownSettingsNew = {
        singleSelection: false,
        idField: 'phone',
        textField: 'name',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };
      // this.dropdownSettings = {
      //   singleSelection: false,
      //   idField: 'item_id',
      //   textField: 'item_text',
      //   selectAllText: 'Select All',
      //   unSelectAllText: 'UnSelect All',
      //   itemsShowLimit: 3,
      //   allowSearchFilter: true
      // };
     
  
    }
    onItemSelect(item: any) {
      // console.log(item);
    }
    onSelectAll(items: any) {
      // console.log(items);
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
      this.invalide_len=0;
      var valide_number =[];
      var invalide_number1=[];

      if(this.gawcontact==1){
        if(!this.sent_numbers){
          $("#valide_number_error").html("Please enter number.").show().fadeOut(2000);
           $("#not_sent_number").hide();
        }else if(!this.sms_content){
          $("#valide_content_error").html("Please enter content.").show().fadeOut(2000);
        }else{
          
       console.log(this.sent_numbers);
        var str = this.sent_numbers;
        //  var res = str.split(",");
         var res = str;
         let i;
       for(i=0;i<res.length;i++){
  
        var number_vali = /^[1-9][0-9]*$/

        if(res[i].value.length == 10 && res[i].value.match(number_vali)){
          console.log(res[i].value);
  
          valide_number.push(res[i].value);
          
          }else{
          
            invalide_number1.push(res[i])
            // console.log(invalide_number1);
          //   localStorage.setItem('invalidenumbers', JSON.stringify(invalide_number1));
          //   this.invalide_number = JSON.parse(localStorage.getItem('invalidenumbers'));
          // //  console.log(this.invalide_number)
           // self.invalide_number = invalide_number1
           if( invalide_number1.length != 0){
                this.invalide_len = invalide_number1.length;
                
             $("#not_sent_number").show();

    
           }else{
          
            $("#not_sent_number").hide();
           }
          }
    
         }
        //  console.log(valide_number);
        //  console.log(this.invalide_number.length);
        }
      }
  // console.log(this.selectedItems);
      // console.log(this.sent_numbers)
 else if(this.gawcontact==2){
  
        var valide_number =[];
        let i;
        for(i=0;i<this.selectedItems.length;i++){
valide_number.push(this.selectedItems[i].phone);

        }
      }
   
      var self = this;
      console.log(self.gawcontactno);
      // if(self.gawcontactno != ""){
      //   self.to.push(self.gawcontactno);
      // }

      var sms_data ={
       "usersid": self.usersid,
       "gatewaystypesid": self.selectedRoute,
       "to": valide_number,
       "content": this.sms_content,
       "status" : "1"      
      }
      console.log(sms_data);
      if(this.invalide_len == 0){
        this.invalide_len = 0;
        $("#not_sent_number").hide();
      }
      axios.post('http://103.214.233.141:3003/v1/secure/users/bulk/messages/send',sms_data
      ).then(function (res) {
  
        // console.log(res);
        Swal({
         position: 'top',
         type: 'success',
         title: 'Message Sent.',
         showConfirmButton: false,
         timer: 1500
       })
           
      })
      .catch(function (error) {
        Swal({
          position: 'top',
          type: 'error',
          title: 'Message Not Sent.',
         } )
        console.log(error);
      });
    }
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
    myDatePickerOptions: IMyDpOptions = {
      todayBtnTxt: 'Today',
      dateFormat: 'dd-mm-yyyy',
      firstDayOfWeek: 'su',
      sunHighlight: true,
      inline: false,
      disableUntil: {year: 2016, month: 8, day: 10},
      openSelectorTopOfInput:true,
      
      alignSelectorRight:false,
      openSelectorOnInputClick:true,
  };
// datepick(){
//   $('#pickdate').datepicker({
//     startView: 1,
//     todayBtn: "linked",
//     keyboardNavigation: false,
//     forceParse: false,
//     autoclose: true,
//     format: "dd/mm/yyyy"
// });
// }
  getroutesType(){
    var self = this;
    axios.get('http://103.214.233.141:3003/v1/secure/gateways/types')
        .then(function (res) {
          
          self.routestypes = res.data;
          // console.log(self.routestypes);
// console.log(res);
         
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  testError(){
    console.log(this.sent_numbers);
    this.invalide_len=0;
      var valide_number =[];
      var invalide_number1=[];
     var str = this.sent_numbers;
        //  var res = str.split(",");
         var res = str;
         let i;
         if(this.invalide_len ==0){
          $("#not_sent_number").hide();
         }
         for(i=0;i<res.length;i++){
          var number_vali = /^[1-9][0-9]*$/

          if(res[i].value.length == 10 && res[i].value.match(number_vali)){
    
            valide_number.push(res[i].value);
            
            }else{
            
              invalide_number1.push(res[i])
              // console.log(invalide_number1);
            //   localStorage.setItem('invalidenumbers', JSON.stringify(invalide_number1));
            //   this.invalide_number = JSON.parse(localStorage.getItem('invalidenumbers'));
            // //  console.log(this.invalide_number)
             // self.invalide_number = invalide_number1
             if( invalide_number1.length != 0){
                  this.invalide_len = invalide_number1.length;
                  
               $("#not_sent_number").show();
  
      
             }else{
            
              $("#not_sent_number").hide();
             }
            }
      
           }

  }

}
