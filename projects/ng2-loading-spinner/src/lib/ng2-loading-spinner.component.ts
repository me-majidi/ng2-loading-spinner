import { Component, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ANIMATION_TYPES } from './animation-types';
import { Ng2LoadingSpinnerConfig } from './config';

@Component({
    selector: 'ng2-loading-spinner',
    template: `
        <div class="backdrop"
             [ngStyle]="{'background-color': config.backdropColor}"></div>

        <div class="wrapper"
             [ngClass]="config.spinnerPosition"
             [ngStyle]="{'color': config.spinnerColor}">
            <ng-container *ngIf="!template">
                <!-- DUAL CIRCLE SPINNER -->
                <div *ngIf="config?.animationType === ANIMATION_TYPES.dualCircle"
                     class="dual-circle"></div>


                <!-- SCALING BARS -->
                <div *ngIf="config?.animationType === ANIMATION_TYPES.scalingBars"
                     class="scaling-bars"></div>


                <!-- CHASING DOTS -->
                <div *ngIf="config?.animationType === ANIMATION_TYPES.chasingDots"
                     class="chasing-dots"></div>


                <!-- BOUNCING DOTS -->
                <div *ngIf="config?.animationType === ANIMATION_TYPES.bouncingDots"
                     class="bouncing-dots">
                    <div class="bounce-1"></div>
                    <div class="bounce-2"></div>
                    <div class="bounce-3"></div>
                </div>
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
        z-index          : 2000;
      }

      .wrapper {
        position : absolute;
        z-index  : 2001;
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

      /***********************/
      /* SCALING BARS SPINNER */
      /***********************/

      .scaling-bars {
        left : 1.5em;
      }

      .scaling-bars,
      .scaling-bars:before,
      .scaling-bars:after {
        background        : currentColor;
        -webkit-animation : scaling-bars-anim 1s infinite ease-in-out;
        animation         : scaling-bars-anim 1s infinite ease-in-out;
        width             : 1em;
        height            : 4em;
      }

      .scaling-bars {
        color                   : currentColor;
        text-indent             : -9999em;
        position                : relative;
        font-size               : 5px;
        -webkit-transform       : translateZ(0);
        -ms-transform           : translateZ(0);
        transform               : translateZ(0);
        -webkit-animation-delay : -0.16s;
        animation-delay         : -0.16s;
      }

      .scaling-bars:before,
      .scaling-bars:after {
        position : absolute;
        top      : 0;
        content  : '';
      }

      .scaling-bars:before {
        left                    : -1.5em;
        -webkit-animation-delay : -0.32s;
        animation-delay         : -0.32s;
      }

      .scaling-bars:after {
        left : 1.5em;
      }

      @-webkit-keyframes scaling-bars-anim {
        0%,
        80%,
        100% {
          box-shadow : 0 0;
          height     : 4em;
        }
        40% {
          box-shadow : 0 -2em;
          height     : 5em;
        }
      }

      @keyframes scaling-bars-anim {
        0%,
        80%,
        100% {
          box-shadow : 0 0;
          height     : 4em;
        }
        40% {
          box-shadow : 0 -2em;
          height     : 5em;
        }
      }

      /***********************/
      /* CHASING DOTS SPINNER */
      /***********************/
      .chasing-dots {
        color             : currentColor;
        font-size         : 20px;
        text-indent       : -9999em;
        overflow          : hidden;
        width             : 1em;
        height            : 1em;
        border-radius     : 50%;
        position          : relative;
        -webkit-transform : translateZ(0);
        -ms-transform     : translateZ(0);
        transform         : translateZ(0);
        -webkit-animation : load6 1.7s infinite ease, round 1.7s infinite ease;
        animation         : load6 1.7s infinite ease, round 1.7s infinite ease;
      }

      @-webkit-keyframes load6 {
        0% {
          box-shadow : 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
        5%,
        95% {
          box-shadow : 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
        10%,
        59% {
          box-shadow : 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
        }
        20% {
          box-shadow : 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
        }
        38% {
          box-shadow : 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
        }
        100% {
          box-shadow : 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
      }

      @keyframes load6 {
        0% {
          box-shadow : 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
        5%,
        95% {
          box-shadow : 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
        10%,
        59% {
          box-shadow : 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
        }
        20% {
          box-shadow : 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
        }
        38% {
          box-shadow : 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
        }
        100% {
          box-shadow : 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
      }

      @-webkit-keyframes round {
        0% {
          -webkit-transform : rotate(0deg);
          transform         : rotate(0deg);
        }
        100% {
          -webkit-transform : rotate(360deg);
          transform         : rotate(360deg);
        }
      }

      @keyframes round {
        0% {
          -webkit-transform : rotate(0deg);
          transform         : rotate(0deg);
        }
        100% {
          -webkit-transform : rotate(360deg);
          transform         : rotate(360deg);
        }
      }

      /***********************/
      /* BOUNCING DOTS SPINNER */
      /***********************/

      .bouncing-dots {
        font-size  : 15px;
        text-align : center;
      }

      .bouncing-dots > div {
        width             : 1em;
        height            : 1em;
        background-color  : currentColor;
        border-radius     : 100%;
        display           : inline-block;
        -webkit-animation : sk-bouncedelay 1.4s infinite ease-in-out both;
        animation         : sk-bouncedelay 1.4s infinite ease-in-out both;
      }

      .bouncing-dots .bounce-1 {
        -webkit-animation-delay : -0.32s;
        animation-delay         : -0.32s;
      }

      .bouncing-dots .bounce-2 {
        -webkit-animation-delay : -0.16s;
        animation-delay         : -0.16s;
      }

      @-webkit-keyframes sk-bouncedelay {
        0%, 80%, 100% { -webkit-transform : scale(0) }
        40% { -webkit-transform : scale(1.0) }
      }

      @keyframes sk-bouncedelay {
        0%, 80%, 100% {
          -webkit-transform : scale(0);
          transform         : scale(0);
        }
        40% {
          -webkit-transform : scale(1.0);
          transform         : scale(1.0);
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
