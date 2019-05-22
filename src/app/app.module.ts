import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SendSmsComponent } from './send-sms/send-sms.component';
import { AddnewgrpComponent } from './addnewgrp/addnewgrp.component';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { BlockNumberComponent } from './block-number/block-number.component';
import { ScheduleSmsComponent } from './schedule-sms/schedule-sms.component';
import { DynamicSmsComponent } from './dynamic-sms/dynamic-sms.component';
import { GroupSmsComponent } from './group-sms/group-sms.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { SmsReportComponent } from './sms-report/sms-report.component';
import { AccountBlncComponent } from './account-blnc/account-blnc.component';
import { SenderIdComponent } from './sender-id/sender-id.component';
import { TransTempComponent } from './trans-temp/trans-temp.component';
import { PartialGroupComponent } from './partial-group/partial-group.component';
import { SaveSmsComponent } from './save-sms/save-sms.component';
import { PluginApisComponent } from './plugin-apis/plugin-apis.component';
import { DownloadCenterComponent } from './download-center/download-center.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { MyDatePickerModule } from 'mydatepicker';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    SendSmsComponent,
    AddnewgrpComponent,
    GrouplistComponent,
    BlockNumberComponent,
    ScheduleSmsComponent,
    DynamicSmsComponent,
    GroupSmsComponent,
    SidenavComponent,
    HeadernavComponent,
    SmsReportComponent,
    AccountBlncComponent,
    SenderIdComponent,
    TransTempComponent,
    PartialGroupComponent,
    SaveSmsComponent,
    PluginApisComponent,
    DownloadCenterComponent,
    ChangePasswordComponent,
    AddContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    NgMultiSelectDropDownModule.forRoot(),
    AmazingTimePickerModule,
    MyDatePickerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule, 
    
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
