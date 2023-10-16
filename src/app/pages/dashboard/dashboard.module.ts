import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
        NgApexchartsModule,
        TableModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent,
            },
        ]),
        TranslateModule,
    ],
})
export class DashboardModule {}
