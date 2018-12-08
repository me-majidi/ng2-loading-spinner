import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Ng2LoadingSpinnerComponent} from './ng2-loading-spinner.component';
import {Ng2LoadingSpinnerDirective} from './ng2-loading-spinner.directive';
import {INg2LoadingSpinnerConfig} from './config';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [Ng2LoadingSpinnerComponent, Ng2LoadingSpinnerDirective],
    exports: [Ng2LoadingSpinnerDirective],
    entryComponents: [Ng2LoadingSpinnerComponent]
})
export class Ng2LoadingSpinnerModule {
    static forRoot(globalConfig: INg2LoadingSpinnerConfig): ModuleWithProviders {
        return {
            ngModule: Ng2LoadingSpinnerModule,
            providers: [{provide: 'loadingConfig', useValue: globalConfig}]
        };
    }
}
