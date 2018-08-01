import { Component } from '@angular/core';
import { ANIMATION_TYPES } from '../../projects/ng2-loading-spinner/src/public_api';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : [ './app.component.scss' ]
})
export class AppComponent {
    show = false;

    loadingCongif = {
        animationType: ANIMATION_TYPES.dualCircle,
        spinnerPosition: 'left'
    };

    constructor () {
    }

    login() {
        this.show = true;
        setTimeout(() => {
            this.show = false;
        }, 1700);
    }
}
