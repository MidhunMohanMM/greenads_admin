import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import axios from 'axios';
import { DataservicesService } from '../services/dataservices/dataservices.service';
@Component({
  selector: 'app-trans-temp',
  templateUrl: './trans-temp.component.html',
  styleUrls: ['./trans-temp.component.css']
})
export class TransTempComponent implements OnInit {
  
  template_name:any;
  sms_content:any
  userdata :any;
  userid : any ;
  public TableDatas ;
 
  load_data =  false;

    constructor(
    private _configs: DataservicesService
    ) { }

  ngOnInit() {

    this._configs.getUsersData().then(rsp => {
        this.TableDatas = rsp;
        console.log(this.TableDatas);
        this.load_data = true;
    });

  var self = this;
  
  }
  addtemplate(){

    //   console.log(this.template_name);
    //   console.log(this.sms_content);
       this.userdata  = JSON.parse(window.localStorage.getItem('userdata'));

       this.userid = this.userdata.usersid;
      if(!this.template_name || !this.sms_content){
        console.log("field missing");
      }else{
        var found = [];
        var rxp = /{([^}]+)}/g ;
        var curMatch;

            while( curMatch = rxp.exec( this.sms_content ) ) {
                found.push( curMatch[1] );
            }

        
        var template_variables = found.join();
        console.log( template_variables );
      
        const data = {

            "usersid" : this.userid ,
            "content" : this.sms_content,
            "variables" : template_variables,
            "status" : "1"
          };
        //   console.log(data);
          axios.post('http://103.214.233.141:3003/v1/secure/users/templates', data)
          .then( res => {
            console.log(res);
            if(res.data){
                window.location.reload();
            }

          })
          .catch( err => {
              console.log(err);
          });
      }
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
    string:"";

}
