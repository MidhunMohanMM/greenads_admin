import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#nCTable").hide();
    $("#conTable").hide();
  }
  addCont(){
    $("#nCTable").show();
    
  }
  conList(){
    $("#conTable").show();
    $("#nCTable").hide();
    $("#addCon").hide();
  }
  addConButn(){
    $("#conTable").hide();
    $("#addCon").show();
  }
}
