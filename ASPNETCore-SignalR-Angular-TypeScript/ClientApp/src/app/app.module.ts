import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { StockComponent } from './stock/stock.component';
import { DynamicHubComponent } from './DynamicHub/dynamichub.component'

import { SignalRService } from './services/signalR.service';
import { stockSignalRService } from './services/stock.signalR.service';
import { DynamicHubSignalRService } from './services/dynamicHub.signalR.service';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    StockComponent,
    DynamicHubComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'stock-data', component: StockComponent },
      { path: 'dynamic', component: DynamicHubComponent },
    ])
  ],
  providers: [SignalRService,stockSignalRService,DynamicHubSignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
