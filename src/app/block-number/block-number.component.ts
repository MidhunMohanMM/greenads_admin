import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import { Router } from '@angular/router';
@Component({
  selector: 'app-block-number',
  templateUrl: './block-number.component.html',
  styleUrls: ['./block-number.component.css']
})
export class BlockNumberComponent implements OnInit {
  block_number:any;
  constructor( private router: Router,) { }

  ngOnInit() {
    $("#bnTable").hide();
    $("#blTable").hide();
  }
  addBlockButn(){
    $("#addNumber").show();
    $("#blTable").hide();
  }

  addNum(){
    console.log(this.block_number);
    if(this.block_number == ''|| this.block_number == undefined ){

      $("#bnerr").html("Please Enter Number").show().fadeOut(2500);
      
  }else {
    $("#bnTable").show();
  }
 }

 bnList(){
 
  $("#blTable").show();
  $("#addNumber").hide();
 }

}
