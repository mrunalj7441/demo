import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportComponent } from './pages/report/report.component';
import { ReferEarnComponent } from './pages/refer-earn/refer-earn.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { EarningsComponent } from './pages/earnings/earnings.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent
  },
  {
    path:'report',
    component: ReportComponent
  },
  {
    path:'refer-earn',
    component: ReferEarnComponent
  },
  {
    path:'account',
    component: AccountSettingsComponent
  },
  {
    path:'earn',
    component: EarningsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
