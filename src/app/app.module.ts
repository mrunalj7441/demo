import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ReportComponent } from './pages/report/report.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { ReferEarnComponent } from './pages/refer-earn/refer-earn.component';
import { EarningsComponent } from './pages/earnings/earnings.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ReportComponent,
    AccountSettingsComponent,
    ReferEarnComponent,
    EarningsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
