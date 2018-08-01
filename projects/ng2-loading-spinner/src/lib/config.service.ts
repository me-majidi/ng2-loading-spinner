import { Injectable } from '@angular/core';
import { INg2LoadingSpinnerConfig, Ng2LoadingSpinnerConfig } from './config';
import { ANIMATION_TYPES } from './animation-types';

@Injectable()
export class ConfigService {

    private readonly defaultConfig: INg2LoadingSpinnerConfig;

    constructor() {
        this.defaultConfig = {
            animationType  : ANIMATION_TYPES.dualCircle,
            backdropColor  : 'rgba(0, 0, 0, 0.3)',
            spinnerColor   : '#fff',
            spinnerPosition: 'center',
            backdropBorderRadius: '0'
        };
    }

    normalizeConfigs(config: INg2LoadingSpinnerConfig) {
        if (!config) {
            config = this.defaultConfig;
            return config;
        }

        for (let option in this.defaultConfig) {
            if (!config[ option ]) {
                config[ option ] = this.defaultConfig[ option ];
            }
        }

        return config;
    }
}