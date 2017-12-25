import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-stock-chart',
    template: '<chart type="StockChart" [options]="options"></chart>'
})
export class StockChartComponent {
    options: Object;

    constructor(private http: Http) {
        http.get('https://cdn.rawgit.com/gevgeny/angular2-highcharts/99c6324d/examples/aapl.json').subscribe(res => {
            this.options = {
                title: { text: 'Stock Chart' },
                series: [{
                    name: 'AAPL',
                    data: res.json(),
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            };
        });
    }
}
