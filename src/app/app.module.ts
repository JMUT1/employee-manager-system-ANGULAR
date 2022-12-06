import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeManagerComponent } from './component/employee-manager/employee-manager.component';
import { HeaderComponent } from './component/header/header.component';
import { ManagerSystemComponent } from './component/employee-manager/manager-system/manager-system.component';
import { SystemListComponent } from './component/employee-manager/manager-system/system-list/system-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeManagerComponent,
    HeaderComponent,
    ManagerSystemComponent,
    SystemListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
