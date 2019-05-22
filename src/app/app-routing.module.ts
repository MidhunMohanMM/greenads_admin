import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { PartialGroupComponent } from './partial-group/partial-group.component';
import { TransTempComponent } from './trans-temp/trans-temp.component';
import { SaveSmsComponent } from './save-sms/save-sms.component';
import { PluginApisComponent } from './plugin-apis/plugin-apis.component';
import { DownloadCenterComponent } from './download-center/download-center.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
{ path : '' , component :  LoginComponent},
{path : 'signup', component : SignupComponent},
{
  path : 'dashboard/:id',
  component : DashboardComponent,
  canActivate: [AuthGuard]
},
{path : 'sendsms',component:SendSmsComponent},
{path : 'addnewgrp',component:AddnewgrpComponent},
{path : 'grouplist',component:GrouplistComponent},
{path : 'blocknumber',component:BlockNumberComponent},
{path : 'schedulesms',component:ScheduleSmsComponent},
{path : 'groupsms',component:GroupSmsComponent},
{path : 'sidenav',component:SidenavComponent},
{path : 'headernav',component:HeadernavComponent},
{path : 'smsreport',component:SmsReportComponent},
{path : 'accountblnc',component:AccountBlncComponent},
{path : 'senderid',component:SenderIdComponent},
{path : 'transtemp',component:TransTempComponent},
{path : 'dynamicsms',component:DynamicSmsComponent},
{path : 'partialgroup',component:PartialGroupComponent},
{path : 'savesms',component:SaveSmsComponent},
{path : 'pluginapis',component:PluginApisComponent},
{path : 'downloadcenter',component:DownloadCenterComponent},
{path : 'changepassword',component:ChangePasswordComponent},
{path : 'addcontact',component:AddContactComponent},


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
