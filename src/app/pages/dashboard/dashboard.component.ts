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
import * as ExcelJS from 'exceljs';
import { config } from 'src/app/config/config';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
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

    showDetail: boolean = false;

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

    dataTable = [
        {
            question: 'Q1',
            excellent: 23,
            good: 26,
            average: 14,
            poor: 0,
            very_poor: 0,
        },
        {
            question: 'Q2',
            excellent: 32,
            good: 19,
            average: 24,
            poor: 0,
            very_poor: 0,
        },
    ];

    fileType: string = config.file.type;
    rangeDates!: Date[];
    constructor(private translationService: TranslationService) {
        this.translationService.loadTranslations(enLang, thLang);
        this.generateChart();
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

    setShowDetail() {
        this.showDetail = !this.showDetail;
    }

    exportToExcel(): void {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Table Data');

        // Define the table columns
        const columns = [
            {
                header: this.translationService.getInstant(
                    'DASHBOARD.QUESTION_NAME'
                ),
                key: 'question',
            },
            {
                header: this.translationService.getInstant(
                    'DASHBOARD.EXCELLENT'
                ),
                key: 'excellent',
            },
            {
                header: this.translationService.getInstant('DASHBOARD.GOOD'),
                key: 'good',
            },
            {
                header: this.translationService.getInstant('DASHBOARD.AVERAGE'),
                key: 'average',
            },
            {
                header: this.translationService.getInstant('DASHBOARD.POOR'),
                key: 'poor',
            },
            {
                header: this.translationService.getInstant(
                    'DASHBOARD.VERY_POOR'
                ),
                key: 'very_poor',
            },
        ];

        worksheet.columns = columns;
        worksheet.addRows(this.dataTable);

        workbook.csv.writeBuffer().then((data: any) => {
            const blob = new Blob([data], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'แบบประเมินวิทยากร' + this.fileType;
            a.click();
            window.URL.revokeObjectURL(url);
        });
    }
}
