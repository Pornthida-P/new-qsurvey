import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';

import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        DashboardModule,
        MenubarModule,
        DropdownModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
