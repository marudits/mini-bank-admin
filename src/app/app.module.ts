import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


//Components
import { AppComponent } from './app.component';
import { BankList } from '../components/bank/bank-list.component';
import { TopBar } from '../components/navigation/topbar.component';
import { SideBar } from '../components/navigation/sidebar.component';
import { FootBar } from '../components/navigation/footbar.component';

//Pages
import { BankPage } from '../pages/bank/index';
import { HomePage } from '../pages/home/index';

//Routing Module
import { AppRoutingModule } from '../utils/config/routing';

//Service
import { BankService } from '../utils/services/bank.service';



@NgModule({
  declarations: [
    BankPage,
    HomePage,
    AppComponent,
    TopBar,
    SideBar,
    FootBar,
    BankList
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ BankService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
