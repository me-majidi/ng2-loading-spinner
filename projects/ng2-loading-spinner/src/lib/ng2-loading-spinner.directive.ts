import { ComponentFactoryResolver, ComponentRef, Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Ng2LoadingSpinnerComponent } from './ng2-loading-spinner.component';
import { ConfigService } from './config.service';

@Directive({
    selector : '[ng2-loading]',
    providers: [ ConfigService ]
})
export class Ng2LoadingSpinnerDirective implements OnInit, OnChanges, OnDestroy {

    @Input('ng2-loading') show;
    @Input() config;
    @Input() template: TemplateRef<any>;

    private spinnerComponentRef: ComponentRef<Ng2LoadingSpinnerComponent>;

    constructor (
        private el: ElementRef,
        private vcRef: ViewContainerRef,
        private cfResolver: ComponentFactoryResolver,
        private renderer: Renderer2,
        private configService: ConfigService) {}

    ngOnInit () {
        this.setPosition();
    }

    ngOnChanges (changes: SimpleChanges) {
        if (changes.show) {
            if (changes.show.currentValue) {
                this.createSpinner();
            } else {
                this.destroySpinner();
            }
        }
    }

    ngOnDestroy () {
        this.destroySpinner();
    }

    setPosition () {
        const elPosition = this.el.nativeElement.style.position;
        if (elPosition === 'relative' || elPosition === 'absolute') {
            return;
        }

        this.el.nativeElement.style.position = 'relative';
    }

    createSpinner () {
        const spinnerCF          = this.cfResolver.resolveComponentFactory(Ng2LoadingSpinnerComponent);
        this.spinnerComponentRef = this.vcRef.createComponent(spinnerCF);


        this.config                                = this.configService.normalizeConfigs(this.config);
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