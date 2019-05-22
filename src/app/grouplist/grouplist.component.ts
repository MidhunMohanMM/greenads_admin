import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from "jquery";
import axios from "axios";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {
  usersid:any;
  listlength:any;
  contactsList: any;
  selectedGroup:any;
  groupid:any;
  name:any;
  contact_name: any; contact_number: any; grpName: any; contactsgroupsid: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    var userdata = JSON.parse(localStorage.getItem('userdata'));
     
      this.usersid = userdata.usersid;
      
  $("#newContactAddDiv").hide();
  $("#contactAddBody").hide();
    
    var self = this;
    axios.get('http://103.214.233.141:3003/v1/secure/users/contacts/groups?userscontactsgroups[usersid]='+self.usersid+'&userscontactsgroups[status]=1')
          .then(function (res) {

            console.log(res.data);
            
            self.contactsList = res.data;
            self.listlength=res.data.length;
            
          })
          .catch(function (error) {
            console.log(error);
          });
  }
  
  addContacts(contactsgroupsid,name){
    // console.log(name)
    this.grpName = name;
    this.contactsgroupsid =contactsgroupsid;
    $("#newContactAddDiv").show();
    $("#groupDiv").hide();
    
  }
  addManually(){
    $("#addmanually").addClass('todo-completed');
    $("#contactAddBody").show();
  }
  contactAdd(){

    console.log(this.contact_name);
    if(this.contact_name == undefined || this.contact_name == ''){
     $("#contact_name_error").html("Please enter name.").show().fadeOut(2000);
    }else if(this.contact_number == undefined){
     $("#contact_number_error").html("Please enter contact number.").show().fadeOut(2000);
    }else{
 
     var self = this;
    
     var contact_info ={
       "usersid": self.usersid ,
       "contactsgroupsid": self.contactsgroupsid,
       "name": self.contact_name,
       "phone": self.contact_number,
       "isblocked":"0",
       "status":"1"


     }
    //  console.log(contact_info);
  
    //  axios.post('http://103.214.233.141:3003/v1/secure/users/contacts',contact_info
    //  ).then(function (res) {
 
    //    console.log(res);
    //   //  localStorage.setItem('contact_info', JSON.stringify(res.data));
    //    self.contact_name = '';
    //    self.contact_number = '';
    //    if(res){
    //     Swal({
    //       position: 'bottom-end',
    //       type: 'success',
    //       title: 'Contact added to this Group.',
    //       showConfirmButton: true,
    //       timer: 1500
    //     })
    //   }
    //  })
    //  .catch(function (error) {
    //    console.log(error);
    //  });
 
    
     }
   }
   showGrp(){
     this.ngOnInit();
     $("#newContactAddDiv").hide();

   }
   newGroup(){
 
    this.router.navigate(['addnewgrp']);
  }
  getGroupbyId(groupid){
    var self = this;
    axios.get('http://103.214.233.141:3003/v1/secure/users/contacts/groups?userscontactsgroups[userscontactsgroupsid]='+ groupid)
        .then(function (res) {

          console.log(res.data);
          self.groupid=groupid;
          self.selectedGroup = res.data[0].name;
       
          console.log(self.selectedGroup);
        })
        .catch(function (error) {
          console.log(error);
        });

  }
  editGroup(){
    var self = this;
      
 this.name=this.selectedGroup;
 console.log(this.name);
 console.log(this.groupid);
 const data = {
  "name": this.name,
 }

    axios.put('http://103.214.233.141:3003/v1/secure/users/contacts/groups/'+this.groupid,data)

    .then(function (response) {
   console.log(response);
     if(response){
      Swal({
        position: 'top-end',
        type: 'success',
        title: 'Saved',
        showConfirmButton: false,
        timer: 1500
      })
     }
     $('#editclose').click();
    
})
   .catch(function (error) {
     console.log(error);
   });
  }

  deleteGroupbyId(groupid){
    var self = this;
      
    axios.put('http://103.214.233.141:3003/v1/secure/users/contacts/groups/' +groupid,{
    "status" : "0"
  })
      .then(function (response) {
       
        if(response){
          Swal({
            position: 'top-end',
            type: 'success',
            title: 'Deleted',
            showConfirmButton: false,
            timer: 1500
          })
        }
        // self.getallproducts();
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
