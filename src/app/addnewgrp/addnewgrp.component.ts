import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from "jquery";
import axios from "axios";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-addnewgrp',
  templateUrl: './addnewgrp.component.html',
  styleUrls: ['./addnewgrp.component.css']
})
export class AddnewgrpComponent implements OnInit {

  group_name: any;
  usersid:any;
  contact_name: any;  contact_number: any;

  contactsgroupsid: any; grpName: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    var userdata = JSON.parse(localStorage.getItem('userdata'));
     
    this.usersid = userdata.usersid;
    $("#contactAddBody").hide();
    $("#grpDetails").hide();
    $("#alert").hide();
  }

  addNewGrpBtn(){
    $("#addNewDetails").show();
    $("#grpDetails").hide();
    this.contact_name = '';
    this.contact_number = '';
  }
  addNew(){
    $("#addNewDetails").show();
    $("#alert").show();
    $("#alert").hide(3000);

   

    console.log(this.group_name);
    if(this.group_name == ''|| this.group_name == undefined ){

      $("#grperror").html("Please enter Group name to proceed.").show().fadeOut(2000);

    }else{
      $("#addNewDetails").hide();
      $("#grpDetails").show();
    var data ={
      'usersid':this.usersid,
       'name': this.group_name,
       'status' :'1'
    }
   
    console.log(data);
    var self = this;
        axios.post('http://103.214.233.141:3003/v1/secure/users/contacts/groups',data
            ).then(function (res) {

              console.log(res);
              self.contactsgroupsid = res.data.contactsgroupsid;
              self.grpName = res.data.name;
              localStorage.setItem('contactsgroupsid',self.contactsgroupsid);
              localStorage.setItem('grpName',self.grpName);
                 self.group_name ='';
            })
            .catch(function (error) {
              console.log(error);
            });
        this.grpName = localStorage.getItem('grpName');
          }
  }

  grpList(){
 
    this.router.navigate(['/grouplist']);
  }
  addManually(){

    $("#contactAddBody").show();
    $("#addmanually").addClass('todo-completed');
  }
  contactAdd(){

   console.log(this.contact_name);
   if(this.contact_name == undefined || this.contact_name ==  ''){
    $("#contact_name_error").html("Please enter name.").show().fadeOut(2000);
   }else if(this.contact_number == undefined || this.contact_number == ''){
    $("#contact_number_error").html("Please enter contact number.").show().fadeOut(2000);
   }else{

    var self = this;
    self.contactsgroupsid = localStorage.getItem("contactsgroupsid");
    var contact_info ={
      "usersid": self.usersid,
      "contactsgroupsid": self.contactsgroupsid,
      "name": self.contact_name,
      "phone": self.contact_number,
      "isblocked":"0",
      "status":"1"
    }
 
    axios.post('http://103.214.233.141:3003/v1/secure/users/contacts',contact_info
    ).then(function (res) {

      console.log(res);
      localStorage.setItem('contact_info', JSON.stringify(res.data));
      self.contact_name = '';
      self.contact_number = '';
      if(res){
        Swal({
          position: 'top-end',
          type: 'success',
          title: 'Contact added to this Group.',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
   
    var data = JSON.parse(localStorage.getItem('contact_info'));
    console.log(data);
    }
  }
  setradio(){
    alert();
  }
}
