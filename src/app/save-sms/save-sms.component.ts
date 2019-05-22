import { Component, OnInit } from '@angular/core';
import $ from "jquery";
@Component({
  selector: 'app-save-sms',
  templateUrl: './save-sms.component.html',
  styleUrls: ['./save-sms.component.css']
})
export class SaveSmsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
}
