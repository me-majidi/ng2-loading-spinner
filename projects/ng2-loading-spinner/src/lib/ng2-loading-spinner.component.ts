import { Component, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ANIMATION_TYPES } from './animation-types';
import { Ng2LoadingSpinnerConfig } from './config';

@Component({
    selector: 'ng2-loading-spinner',
    template: `
        <div class="backdrop" [ngStyle]="{'background-color': config.backdropColor}"></div>
        
        <div class="wrapper" [ngClass]="config.spinnerPosition">
            <ng-container *ngIf="!template">
                <!-- DUAL CIRCLE SPINNER -->
                <div *ngIf="config?.animationType === ANIMATION_TYPES.dualCircle" [ngStyle]="{'color': config.spinnerColor}"
                     class="dual-circle"></div>
            </ng-container>
            
            <ng-container *ngTemplateOutlet="template"
                          ngStyle="styles"></ng-container>
        </div>
    `,
    styles  : [ `
      .backdrop {
        background-color : rgba(0, 0, 0, 0.3);
        position         : absolute;
        top              : 0;
        left             : 0;
        right            : 0;
        bottom           : 0;
        z-index: 2000;
      }

      .wrapper {
        position : absolute;
        z-index: 2001;
      }

      /* POSITIONING SPINNER */
      .left {
        top       : 50%;
        left      : 5px;
        transform : translateY(-50%);
      }

      .right {
        top       : 50%;
        right     : 5px;
        transform : translateY(-50%);
      }

      .top-right {
        top   : 5px;
        right : 5px;
      }

      .top-left {
        top  : 5px;
        left : 5px;
      }

      .bottom-right {
        bottom : 5px;
        right  : 5px;
      }

      .bottom-left {
        bottom : 5px;
        left   : 5px;
      }

      .center {
        top       : 50%;
        left      : 50%;
        transform : translate(-50%, -50%);
      }

      /***********************/
      /* DUAL CIRCLE SPINNER */
      /***********************/
      .dual-circle {
        display : inline-block;
        width   : 35px;
        height  : 35px;
      }

      .dual-circle:after {
        content       : " ";
        display       : block;
        width         : 35px;
        height        : 35px;
        border-radius : 50%;
        border        : 4px solid currentColor;
        border-color  : currentColor transparent currentColor transparent;
        animation     : dual-cricle-anim 1.2s linear infinite;
      }

      @keyframes dual-cricle-anim {
        0% {
          transform : rotate(0deg);
        }
        100% {
          transform : rotate(360deg);
        }
      }
    ` ]
})
export class Ng2LoadingSpinnerComponent implements OnInit {

    @Input() config: Ng2LoadingSpinnerConfig;
    @Input() template: TemplateRef<any>;

    ANIMATION_TYPES = ANIMATION_TYPES;

    constructor (public vcRef: ViewContainerRef) { }

    ngOnInit () {}
}
