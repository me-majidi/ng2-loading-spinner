import { NgModule } from '@angular/core';
import { Ng2LoadingSpinnerComponent } from './ng2-loading-spinner.component';
import { CommonModule } from '@angular/common';
import { Ng2LoadingSpinnerDirective } from './ng2-loading-spinner.directive';

@NgModule({
    imports     : [
        CommonModule
    ],
    declarations: [ Ng2LoadingSpinnerComponent, Ng2LoadingSpinnerDirective ],
    exports     : [ Ng2LoadingSpinnerComponent, Ng2LoadingSpinnerDirective ],
    entryComponents: [ Ng2LoadingSpinnerComponent ]
})
export class Ng2LoadingSpinnerModule {
}
