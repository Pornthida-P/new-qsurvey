import { AfterViewChecked, Component, OnInit } from '@angular/core';
import {
    faMeh,
    faSadCry,
    faSadTear,
    faSmile,
    faSmileWink,
} from '@fortawesome/free-regular-svg-icons';

import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { TranslationService } from 'src/app/i18n/translation.service';
import { locale as enLang } from 'src/assets/new-qsurvey/i18n/en';
import { locale as thLang } from 'src/assets/new-qsurvey/i18n/th';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewChecked {
    faUsers = faUsers;
    smiley = [
        {
            name: 'DASHBOARD.EXCELLENT',
            percent: 47,
            bgColor: '#1791f4',
            icon: faSmileWink,
        },
        {
            name: 'DASHBOARD.GOOD',
            percent: 46,
            bgColor: '#00bdb4',
            icon: faSmile,
        },
        {
            name: 'DASHBOARD.AVERAGE',
            percent: 5,
            bgColor: '#ffb443',
            icon: faMeh,
        },
        {
            name: 'DASHBOARD.POOR',
            percent: 0,
            bgColor: '#ff6347',
            icon: faSadTear,
        },
        {
            name: 'DASHBOARD.VERY_POOR',
            percent: 0,
            bgColor: '#ed143d',
            icon: faSadCry,
        },
    ];
    chartOptions: any = {};

    data = [
        {
            name: 'DASHBOARD.EXCELLENT',
            total: 62,
        },
        {
            name: 'DASHBOARD.GOOD',
            total: 38,
        },
        {
            name: 'DASHBOARD.AVERAGE',
            total: 10,
        },
        {
            name: 'DASHBOARD.POOR',
            total: 0,
        },
        {
            name: 'DASHBOARD.VERY_POOR',
            total: 0,
        },
    ];

    constructor(private translationService: TranslationService) {
        this.translationService.loadTranslations(enLang, thLang);
        this.generateChart();
    }
    ngAfterViewChecked(): void {
        console.log('rewrite chart');
        // this.generateChart();
    }

    ngOnInit(): void {}

    generateChart() {
        var series = [62, 38, 10, 0, 0];
        var total = series.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        );
        var labels = [
            this.translationService.getInstant('DASHBOARD.EXCELLENT'),
            this.translationService.getInstant('DASHBOARD.GOOD'),
            this.translationService.getInstant('DASHBOARD.AVERAGE'),
            this.translationService.getInstant('DASHBOARD.POOR'),
            this.translationService.getInstant('DASHBOARD.VERY_POOR'),
        ];
        this.chartOptions = {
            series: series,
            chart: {
                height: 330,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            show: true,
                        },
                        value: {
                            show: true,
                            fontSize: '14px',
                        },
                        total: {
                            show: true,
                            label: this.translationService.getInstant(
                                'DASHBOARD.TOTAL'
                            ),
                            color: '#000000',
                            formatter: function () {
                                return total;
                            },
                        },
                    },
                },
            },
            labels: labels,
            legend: {
                show: true,
            },
            colors: ['#1791f4', '#00bdb4', '#ffb443', '#ff6347', '#ed143d'],
        };
    }
}
