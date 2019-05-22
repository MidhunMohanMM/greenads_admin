import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';
import { User, Role } from '../_models';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  currentUser: User;
  userType: any;
  userData: any;
  usersid:any;
  username:any;
  constructor(
    private router: Router,
    public auth: AuthService
    ) {
      this.auth.currentUser.subscribe(x => this.currentUser = x);
      this.userType = localStorage.getItem('type');
    }
    get isUSR() {
      return this.currentUser && this.currentUser.role === Role.USR;
  }
  get isRUSR() {
    return this.currentUser && this.currentUser.role === Role.RUSR;
  }
  get isSUBUSR() {
    return this.currentUser && this.currentUser.role === Role.SUBUSR;
  }
  ngOnInit() {
    var userdata = JSON.parse(localStorage.getItem('userdata'));
     
    this.usersid = userdata.usersid;
    this.username = userdata.users_permission.name;
    this.username =this.username.replace(/ +/g, '');
    // console.log( this.currentUser);
    $("#activeList1").click(function() {

      $("#activeList1").toggleClass("active");
      $("#ActiveIn1").toggleClass("in");
    });
    $("#activeList2").click(function(){

      $("#activeList2").toggleClass("active");
      $("#ActiveIn2").toggleClass("in");
    });
    $("#activeList3").click(function(){

      $("#activeList3").toggleClass("active");
      $("#ActiveIn3").toggleClass("in");
    });
    $("#activeList5").click(function(){

      $("#activeList5").toggleClass("active");
      $("#ActiveIn5").toggleClass("in");
    });
    $("#activeList7").click(function(){

      $("#activeList7").toggleClass("active");
      $("#ActiveIn7").toggleClass("in");
    });
  }

}
