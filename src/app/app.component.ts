import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslationService } from './i18n/translation.service';

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

    sidebarVisible: boolean = false;
    selectedLanguage!: Language;
    menuItems: MenuItem[] = [
        {
            label: 'Dashboard',
            routerLink: ['/dashboard', { lang: this.selectedLanguage?.code }],
        },
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

    constructor(private translationService: TranslationService) {
        this.language = [
            { name: 'TH', code: 'th' },
            { name: 'ENG', code: 'en' },
        ];
        this.language.forEach((element: any) => {
            if (element.code == this.translationService.getSelectedLanguage()) {
                this.selectedLanguage = element;
            }
        });
        this.translationService.setLanguage(this.selectedLanguage?.code);
    }

    ngOnInit() {}

    onLanguageChange(event: any) {
        this.translationService.setLanguage(event?.value?.code);
    }
}
