import { Component } from '@angular/core';
import { ANIMATION_TYPES } from '../../projects/ng2-loading-spinner/src/public_api';
import { INg2LoadingSpinnerConfig } from '../../projects/ng2-loading-spinner/src/lib/config';
import { NgForm } from '@angular/forms';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : [ './app.component.scss' ]
})
export class AppComponent {
    show = false;
    borderRadius = 15;

    loadingConfig: INg2LoadingSpinnerConfig = {
        animationType  : ANIMATION_TYPES.dualCircle,
        backdropColor  : 'rgba(0, 0, 0, 0.3)',
        spinnerColor   : '#fff',
        spinnerPosition: 'center',
        backdropBorderRadius: '15px'
    };

    constructor () {
    }

    showLoading() {
        this.show = true;
        setTimeout(() => {
            this.show = false;
        }, 2000);
    }

    onChangeOptions(form: NgForm) {
        this.loadingConfig.backdropBorderRadius = form.value.backdropBorderRadius + 'px';
    }
}
