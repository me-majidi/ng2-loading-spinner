export interface INg2LoadingSpinnerConfig {
    animationType?: string,
    backdropColor?: string,
    backdropBorderRadius?: string,
    spinnerColor?: string,
    spinnerPosition?: string,
    spinnerSize?: string
}

export class Ng2LoadingSpinnerConfig implements INg2LoadingSpinnerConfig {
    animationType;
    backdropColor: string;
    spinnerColor: string;
    spinnerPosition: string;
    backdropBorderRadius: string;
    spinnerSize: string;

    constructor(config : INg2LoadingSpinnerConfig) {
        this.animationType = config.animationType;
        this.backdropColor = config.backdropColor;
        this.spinnerColor = config.spinnerColor;
        this.spinnerPosition = config.spinnerPosition;
        this.backdropBorderRadius = config.backdropBorderRadius;
        this.spinnerSize = config.spinnerSize;
    }
}