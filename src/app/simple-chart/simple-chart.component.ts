import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-simple-chart',
    template: '<chart [options]="options"></chart>'
})
export class SimpleChartComponent {
    options: Object;

    constructor(private http: Http) {
        this.options = {
            title: { text: 'Simple Chart Example' },
            series: [{
                data: [29.9, 71.5, 106.4, 129],
            }]
        };
    }
}
