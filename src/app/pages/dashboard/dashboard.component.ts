import { Component, OnInit } from '@angular/core';
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
export class DashboardComponent implements OnInit {
    faUsers = faUsers;
    smiley = [
        {
            name: 'Excellent',
            percent: 47,
            bgColor: '#1791f4',
            icon: faSmileWink,
        },
        {
            name: 'Good',
            percent: 46,
            bgColor: '#00bdb4',
            icon: faSmile,
        },
        {
            name: 'Average',
            percent: 5,
            bgColor: '#ffb443',
            icon: faMeh,
        },
        {
            name: 'Poor',
            percent: 0,
            bgColor: '#ff6347',
            icon: faSadTear,
        },
        {
            name: 'Very Poor',
            percent: 0,
            bgColor: '#ed143d',
            icon: faSadCry,
        },
    ];
    chartOptions: any = {};

    data = [
        {
            name: 'Excellent',
            total: 62,
        },
        {
            name: 'Good',
            total: 38,
        },
        {
            name: 'Average',
            total: 10,
        },
        {
            name: 'Poor',
            total: 0,
        },
        {
            name: 'Very Poor',
            total: 0,
        },
    ];
    constructor(private translationService: TranslationService) {
        this.translationService.loadTranslations(enLang, thLang);

        var series = [62, 38, 10, 0, 0];
        var total = series.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        );
        var labels = ['Excellent', 'Good', 'Average', 'Poor', 'Very Poor'];
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
                            label: 'Total',
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
    ngOnInit(): void {}
}
