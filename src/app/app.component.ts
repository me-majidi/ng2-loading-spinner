import {AfterContentChecked, Component, TemplateRef, ViewChild} from '@angular/core';
import { ANIMATION_TYPES } from '../../projects/ng2-loading-spinner/src/public_api';
import { INg2LoadingSpinnerConfig } from '../../projects/ng2-loading-spinner/src/lib/config';
import { NgForm } from '@angular/forms';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : [ './app.component.scss' ]
})
export class AppComponent implements  AfterContentChecked {
    @ViewChild('customTemplate') customTemplate: TemplateRef<any>;
    show = false;
    borderRadius = 15;
    fontSize;
    template = null;
    initialized: boolean;

    loadingConfig: INg2LoadingSpinnerConfig = {
        animationType  : ANIMATION_TYPES.cubeGrid,
        backdropColor  : 'rgba(0, 0, 0, 0.3)',
        spinnerPosition: 'center',
        backdropBorderRadius: '15px',
        spinnerSize: 'md',
        spinnerFontSize: '',
        spinnerColor: '#fff'
    };

    btnLoadingConfig: INg2LoadingSpinnerConfig = {
        animationType: ANIMATION_TYPES.fadingCircle,
        backdropColor: 'transparent',
        spinnerPosition: 'left',
        spinnerSize: 'xs',
        spinnerColor: 'green',
    };

    constructor () {
    }

    ngAfterContentChecked() {
        this.initialized = true;
    }

    showLoading() {
        this.show = true;
        setTimeout(() => {
            this.show = false;
        }, 1500);
    }

    onChangeOptions(form: NgForm) {
        this.loadingConfig.backdropBorderRadius = form.value.backdropBorderRadius + 'px';
        this.loadingConfig.spinnerFontSize = form.value.spinnerFontSize + 'px';


        if (form.value.customTemplate) {
            this.template = this.customTemplate;
        } else {
            this.template = null;
        }
    }
}
