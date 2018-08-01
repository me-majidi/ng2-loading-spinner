import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Ng2LoadingSpinnerComponent } from './ng2-loading-spinner.component';
import { ConfigService } from './config.service';

@Directive({
    selector : '[ng2-loading]',
    providers: [ ConfigService ]
})
export class Ng2LoadingSpinnerDirective implements OnInit, OnChanges, OnDestroy {

    @Input('ng2-loading') show;
    @Input() config;
    @Input() template: TemplateRef;

    private spinnerComponentRef: ComponentRef<Ng2LoadingSpinnerComponent>;

    constructor (
        private vcRef: ViewContainerRef,
        private cfResolver: ComponentFactoryResolver,
        private renderer: Renderer2,
        private configService: ConfigService) {}

    ngOnInit () {}

    ngOnChanges (changes: SimpleChanges) {
        if (changes.show.currentValue) {
            this.createSpinner();
        } else {
            this.destroySpinner();
        }
    }

    ngOnDestroy() {
        this.destroySpinner();
    }

    createSpinner () {
        const spinnerCF          = this.cfResolver.resolveComponentFactory(Ng2LoadingSpinnerComponent);
        this.spinnerComponentRef = this.vcRef.createComponent(spinnerCF);


        this.configService.normalizeConfigs(this.config);
        this.spinnerComponentRef.instance.config   = this.config;
        this.spinnerComponentRef.instance.template = this.template;

        this.renderer.appendChild(
            this.vcRef.element.nativeElement,
            this.spinnerComponentRef.injector.get(Ng2LoadingSpinnerComponent).vcRef.element.nativeElement
        );
    }

    destroySpinner () {
        if (this.spinnerComponentRef) {
            this.spinnerComponentRef.destroy();
        }
    }
}