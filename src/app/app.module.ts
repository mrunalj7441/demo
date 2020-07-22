import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './admin-portal/dashboard/dashboard.component';
import { AccountComponent } from './admin-portal/account/account.component';
import { LogInComponent } from './admin-portal/log-in/log-in.component';

@NgModule({
  declarations: [
     DashboardComponent,
     AccountComponent,
     LogInComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }