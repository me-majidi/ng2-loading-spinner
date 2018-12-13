import {Inject, Injectable, Optional} from '@angular/core';
import {INg2LoadingSpinnerConfig} from './config';
import {ANIMATION_TYPES} from './animation-types';
import {findIndex, objectValues} from './utils';

@Injectable()
export class ConfigService {

    private readonly defaultConfig: INg2LoadingSpinnerConfig;

    constructor(@Inject('loadingConfig') @Optional() private readonly config: INg2LoadingSpinnerConfig) {
        this.config = this.config || {};
        this.defaultConfig =  {
            animationType: this.config.animationType || ANIMATION_TYPES.fadingCircle,
            backdropColor: this.config.backdropColor || 'rgba(0, 0, 0, 0.3)',
            spinnerColor: this.config.spinnerColor || '#fff',
            spinnerPosition: this.config.spinnerPosition || 'center',
            backdropBorderRadius: this.config.backdropBorderRadius || '0',
            spinnerSize: this.config.spinnerSize || 'md',
            spinnerFontSize: this.config.spinnerFontSize || ''
        };
    }

    normalizeConfigs(config: INg2LoadingSpinnerConfig) {
        if (!config) {
            config = this.defaultConfig;
            return config;
        }

        if (config.spinnerSize === '' && config.spinnerFontSize === '') {
            config.spinnerFontSize = '1rem';
        }

        for (const option in this.defaultConfig) {
            if (!config[option]) {
                config[option] = this.defaultConfig[option];
            }
        }

        if (findIndex(objectValues(ANIMATION_TYPES), config['animationType']) === -1) {
            config['animationType'] = ANIMATION_TYPES.fadingCircle;
        }

        return config;
    }
}
