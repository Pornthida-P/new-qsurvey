import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface Language {
    name: string;
    code: string;
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'new-qsurvey';

    language: Language[] | undefined;

    selectedLanguage: Language | undefined;
    menuItems: MenuItem[] = [
        { label: 'Dashboard', routerLink: ['/dashboard'] },
        {
            label: 'Question Management',
            routerLink: ['/'],
        },
        {
            label: 'Form Management',
            routerLink: ['/'],
        },
        {
            label: 'Channel Management',
            routerLink: ['/'],
        },
        {
            label: 'User Management',
            routerLink: ['/'],
        },
    ];

    ngOnInit() {
        this.language = [
            { name: 'TH', code: 'TH' },
            { name: 'ENG', code: 'ENG' },
        ];
    }
}
