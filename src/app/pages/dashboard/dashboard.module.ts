import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
        NgApexchartsModule,
        TableModule,
        CalendarModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent,
            },
        ]),
        TranslateModule,
        FormsModule,
    ],
})
export class DashboardModule {}
