import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ColorPickerModule } from 'ngx-color-picker';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        FormsModule,
        Ng2LoadingSpinnerModule,
        ColorPickerModule
    ],
    providers   : [],
    bootstrap   : [ AppComponent ]
})
export class AppModule {
}
