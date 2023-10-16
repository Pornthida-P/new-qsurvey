import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslationService } from './i18n/translation.service';
import { locale as enLang } from 'src/assets/new-qsurvey/i18n/en';
import { locale as thLang } from 'src/assets/new-qsurvey/i18n/th';

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
    menuItems!: MenuItem[];

    constructor(private translationService: TranslationService) {
        this.translationService.loadTranslations(enLang, thLang);
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
        this.setItemMenu();
    }

    ngOnInit() {}

    onLanguageChange(event: any) {
        this.translationService.setLanguage(event?.value?.code);
        this.setItemMenu();
    }

    setItemMenu() {
        this.menuItems = [
            {
                label: this.translationService.getInstant('MENU.DASHBOARD'),
                routerLink: [
                    '/dashboard',
                    { lang: this.selectedLanguage?.code },
                ],
            },
            {
                label: this.translationService.getInstant(
                    'MENU.QUESTION_MANAGEMENT'
                ),
                routerLink: ['/'],
            },
            {
                label: this.translationService.getInstant(
                    'MENU.FORM_MANAGEMENT'
                ),
                routerLink: ['/'],
            },
            {
                label: this.translationService.getInstant(
                    'MENU.CHANNEL_MANAGEMENT'
                ),
                routerLink: ['/'],
            },
            {
                label: this.translationService.getInstant(
                    'MENU.USER_MANAGEMENT'
                ),
                routerLink: ['/'],
            },
        ];
    }
}
