import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterializeModule } from "angular2-materialize";

//Components
import { AppComponent } from './app.component';

import { BankList } from '../components/bank/bank-list.component';
import { BankForm } from '../components/bank/bank-form.component';
import { BankDetail } from '../components/bank/bank-detail.component';

import { RatingList } from '../components/rating/rating-list.component';
import { RatingDetail } from '../components/rating/rating-detail.component';

import { EmployeeList } from '../components/employee/employee-list.component';
import { EmployeeDetail } from '../components/employee/employee-detail.component';
import { EmployeeForm } from '../components/employee/employee-form.component';


import { TopBar } from '../components/navigation/topbar.component';
import { SideBar } from '../components/navigation/sidebar.component';
import { FootBar } from '../components/navigation/footbar.component';

import { DialogModal } from '../components/common/dialog/modal';


//Pages
import { BankPage } from '../pages/bank/index';
import { HomePage } from '../pages/home/index';
import { RatingPage } from '../pages/rating/index';
import { ContactPage } from '../pages/contact/index';

//Routing Module
import { AppRoutingModule } from '../utils/config/routing';

//Service
import { BankService } from '../utils/services/bank.service';
import { RatingService } from '../utils/services/rating.service';
import { EmployeeService } from '../utils/services/employee.service';
import { DepartmentService } from '../utils/services/department.service';
import { PositionService } from '../utils/services/position.service';

import "materialize-css";
import "angular2-materialize";

@NgModule({
  declarations: [
    BankPage,
    HomePage,
    RatingPage,
    ContactPage,
    AppComponent,
    TopBar,
    SideBar,
    FootBar,
    BankList,
    BankDetail,
    BankForm,
    RatingList,
    RatingDetail,
    EmployeeList,
    EmployeeDetail,
    EmployeeForm,
    DialogModal
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule
  ],
  providers: [ 
    BankService, 
    RatingService,
    EmployeeService,
    DepartmentService,
    PositionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
