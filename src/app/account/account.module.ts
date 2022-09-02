import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


@NgModule({
  declarations: [
    ForgotpasswordComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ChangepasswordComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
