import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from "angular2-materialize";

//Components
import { AppComponent } from './app.component';
import { BankList } from '../components/bank/bank-list.component';
import { BankForm } from '../components/bank/bank-form.component';
import { RatingList } from '../components/rating/rating-list.component';
import { TopBar } from '../components/navigation/topbar.component';
import { SideBar } from '../components/navigation/sidebar.component';
import { FootBar } from '../components/navigation/footbar.component';
import { DialogModal } from '../components/common/dialog/modal';

//Pages
import { BankPage } from '../pages/bank/index';
import { HomePage } from '../pages/home/index';
import { RatingPage } from '../pages/rating/index';

//Routing Module
import { AppRoutingModule } from '../utils/config/routing';

//Service
import { BankService } from '../utils/services/bank.service';
import { RatingService } from '../utils/services/rating.service';

import "materialize-css";
import "angular2-materialize";

@NgModule({
  declarations: [
    BankPage,
    HomePage,
    RatingPage,
    AppComponent,
    TopBar,
    SideBar,
    FootBar,
    BankList,
    BankForm,
    RatingList,
    DialogModal
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    MaterializeModule
  ],
  providers: [ BankService, RatingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
