import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import $ from "jquery";
import axios from "axios";
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;
  constructor(
    private router: Router,
    public auth: AuthService
    ) { }

  ngOnInit() {
  }

  doLogin(){

    if(this.email == undefined){
      
      $("#emailError").html("Email is required").show().fadeOut(2000);
    }else if(this.password == undefined){

      $("#passwordError").html("Password is required").show().fadeOut(2000);
    }else{

      this.auth.doLogin(this.email, this.password);
      // this.router.navigate(['dashboard']);
    }

  }

  user_signup() {

    this.router.navigate(['signup']);

  }

}


