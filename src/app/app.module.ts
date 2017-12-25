import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { AppComponent } from './app.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { AppRoutingModule } from './app-routing.module';
import { SimpleChartComponent } from './simple-chart/simple-chart.component';

declare var require: any;

export function highchartsFactory() {
  const hc = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  const hs = require('highcharts/highstock');
  // dd(hc);
  // hs(hc);

  return hs;
}


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ChartModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    StockChartComponent,
    SimpleChartComponent
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
