import { Component } from '@angular/core';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : [ './app.component.scss' ]
})
export class AppComponent {
    show = false;

    loadingCongif = {
        animationType: 'bouncingDots',
        spinnerPosition: 'left'
    };

    constructor () {
    }

    login() {
        this.show = true;
        setTimeout(() => {
//            this.show = false;
        }, 1700);
    }
}
