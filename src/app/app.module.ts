import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeSystemComponent } from './employee-system/employee-system.component';
import { EmployeeManagerComponent } from './component/employee-manager/employee-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSystemComponent,
    EmployeeManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
