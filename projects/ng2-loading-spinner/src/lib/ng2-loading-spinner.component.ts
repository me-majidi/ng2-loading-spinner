import {Component, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ANIMATION_TYPES} from './animation-types';
import {Ng2LoadingSpinnerConfig} from './config';

@Component({
    selector: 'ng2-loading-spinner',
    template: `
        <div class="backdrop"
             [ngStyle]="{'background-color': config.backdropColor, 'border-radius': config.backdropBorderRadius}"></div>

        <div class="wrapper"
             [ngClass]="[config.spinnerPosition, config.spinnerSize]"
             [ngStyle]="{'color': config.spinnerColor, 'font-size': config.spinnerFontSize}">
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


                <!-- FADING CIRCLE -->
                <div *ngIf="config?.animationType === ANIMATION_TYPES.fadingCircle"
                     class="fading-circle">
                    <div class="sk-circle1 sk-circle"></div>
                    <div class="sk-circle2 sk-circle"></div>
                    <div class="sk-circle3 sk-circle"></div>
                    <div class="sk-circle4 sk-circle"></div>
                    <div class="sk-circle5 sk-circle"></div>
                    <div class="sk-circle6 sk-circle"></div>
                    <div class="sk-circle7 sk-circle"></div>
                    <div class="sk-circle8 sk-circle"></div>
                    <div class="sk-circle9 sk-circle"></div>
                    <div class="sk-circle10 sk-circle"></div>
                    <div class="sk-circle11 sk-circle"></div>
                    <div class="sk-circle12 sk-circle"></div>
                </div>

                <!-- HALF CIRCLE -->
                <div *ngIf="config?.animationType === ANIMATION_TYPES.halfCircle" class="half-circle"></div>

                <!-- CUBIC GRID -->
                <div class="sk-cube-grid cube-grid" *ngIf="config?.animationType === ANIMATION_TYPES.cubeGrid">
                    <div class="sk-cube sk-cube1"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube2"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube3"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube4"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube5"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube6"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube7"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube8"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                    <div class="sk-cube sk-cube9"
                         [ngStyle]="{'background-color': config?.spinnerColor}"></div>
                </div>
            </ng-container>

            <ng-container *ngTemplateOutlet="template"></ng-container>
        </div>
    `,
    styles: [`
        .backdrop {
            background-color: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2000;
        }

        .wrapper {
            position: absolute;
            z-index: 2001;
        }

        /* POSITIONING SPINNER */
        .left {
            top: 50%;
            left: 5px;
            transform: translateY(-50%);
        }

        .right {
            top: 50%;
            right: 5px;
            transform: translateY(-50%);
        }

        .top {
            top: 5px;
            left: 50%;
            transform: translateX(-50%);
        }

        .bottom {
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
        }

        .top-right {
            top: 5px;
            right: 5px;
        }

        .top-left {
            top: 5px;
            left: 5px;
        }

        .bottom-right {
            bottom: 5px;
            right: 5px;
        }

        .bottom-left {
            bottom: 5px;
            left: 5px;
        }

        .center {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        /***********************/
        /* SIZING      SPINNER */
        /***********************/
        .xs {
            font-size: 0.5rem;
        }

        .sm {
            font-size: 1rem;
        }

        .md {
            font-size: 1.5rem;
        }

        .lg {
            font-size: 2rem;
        }

        .xl {
            font-size: 2.5rem;
        }

        /***********************/
        /* DUAL CIRCLE SPINNER */
        /***********************/
        .dual-circle {
            display: inline-block;
        }

        .dual-circle:after {
            content: " ";
            display: block;
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            border: .1em solid currentColor;
            border-color: currentColor transparent currentColor transparent;
            animation: dual-cricle-anim 1.2s linear infinite;
        }

        @keyframes dual-cricle-anim {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        /***********************/
        /* SCALING BARS SPINNER */
        /***********************/

        .center .scaling-bars,
        .top .scaling-bars,
        .bottom .scaling-bars {
            left: 0;
        }

        .left .scaling-bars,
        .top-left .scaling-bars,
        .top-bottom .scaling-bars {
            left: 1.5em;
        }

        .right .scaling-bars,
        .top-right .scaling-bars,
        .bottom-right .scaling-bars {
            right: 1.5em;
        }

        .scaling-bars,
        .scaling-bars:before,
        .scaling-bars:after {
            background: currentColor;
            -webkit-animation: scaling-bars-anim 1s infinite ease-in-out;
            animation: scaling-bars-anim 1s infinite ease-in-out;
            width: 1em;
            height: 2em;
        }

        .scaling-bars {
            color: currentColor;
            text-indent: -9999em;
            position: relative;
            font-size: .5em;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
        }

        .scaling-bars:before,
        .scaling-bars:after {
            position: absolute;
            top: 0;
            content: '';
        }

        .scaling-bars:before {
            left: -1.5em;
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
        }

        .scaling-bars:after {
            left: 1.5em;
        }

        @-webkit-keyframes scaling-bars-anim {
            0%,
            80%,
            100% {
                box-shadow: 0 0;
                height: 4em;
            }
            40% {
                box-shadow: 0 -2em;
                height: 5em;
            }
        }

        @keyframes scaling-bars-anim {
            0%,
            80%,
            100% {
                box-shadow: 0 0;
                height: 4em;
            }
            40% {
                box-shadow: 0 -2em;
                height: 5em;
            }
        }

        /***********************/
        /* CHASING DOTS SPINNER */
        /***********************/
        .chasing-dots {
            color: currentColor;
            font-size: 1.5em;
            text-indent: -9999em;
            overflow: hidden;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            position: relative;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
            animation: load6 1.7s infinite ease, round 1.7s infinite ease;
        }

        @-webkit-keyframes load6 {
            0% {
                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
            }
            5%,
            95% {
                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
            }
            10%,
            59% {
                box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
            }
            20% {
                box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
            }
            38% {
                box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
            }
            100% {
                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
            }
        }

        @keyframes load6 {
            0% {
                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
            }
            5%,
            95% {
                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
            }
            10%,
            59% {
                box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
            }
            20% {
                box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
            }
            38% {
                box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
            }
            100% {
                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
            }
        }

        @-webkit-keyframes round {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }

        @keyframes round {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }

        /***********************/
        /* BOUNCING DOTS SPINNER */
        /***********************/

        .bouncing-dots {
            font-size: inherit;
            text-align: center;
        }

        .bouncing-dots > div {
            width: 1em;
            height: 1em;
            background-color: currentColor;
            border-radius: 100%;
            display: inline-block;
            -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
            animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        }

        .bouncing-dots .bounce-1 {
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
        }

        .bouncing-dots .bounce-2 {
            -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
        }

        @-webkit-keyframes sk-bouncedelay {
            0%, 80%, 100% {
                -webkit-transform: scale(0)
            }
            40% {
                -webkit-transform: scale(1.0)
            }
        }

        @keyframes sk-bouncedelay {
            0%, 80%, 100% {
                -webkit-transform: scale(0);
                transform: scale(0);
            }
            40% {
                -webkit-transform: scale(1.0);
                transform: scale(1.0);
            }
        }

        /***********************/
        /* FADING CIRCLE SPINNER */
        /***********************/

        .fading-circle {
            font-size: inherit;
            width: 2em;
            height: 2em;
            position: relative;
        }

        .fading-circle .sk-circle {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }

        .fading-circle .sk-circle:before {
            content: '';
            display: block;
            margin: 0 auto;
            width: 15%;
            height: 15%;
            background-color: currentColor;
            border-radius: 100%;
            -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
            animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
        }

        .fading-circle .sk-circle2 {
            -webkit-transform: rotate(30deg);
            -ms-transform: rotate(30deg);
            transform: rotate(30deg);
        }

        .fading-circle .sk-circle3 {
            -webkit-transform: rotate(60deg);
            -ms-transform: rotate(60deg);
            transform: rotate(60deg);
        }

        .fading-circle .sk-circle4 {
            -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            transform: rotate(90deg);
        }

        .fading-circle .sk-circle5 {
            -webkit-transform: rotate(120deg);
            -ms-transform: rotate(120deg);
            transform: rotate(120deg);
        }

        .fading-circle .sk-circle6 {
            -webkit-transform: rotate(150deg);
            -ms-transform: rotate(150deg);
            transform: rotate(150deg);
        }

        .fading-circle .sk-circle7 {
            -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            transform: rotate(180deg);
        }

        .fading-circle .sk-circle8 {
            -webkit-transform: rotate(210deg);
            -ms-transform: rotate(210deg);
            transform: rotate(210deg);
        }

        .fading-circle .sk-circle9 {
            -webkit-transform: rotate(240deg);
            -ms-transform: rotate(240deg);
            transform: rotate(240deg);
        }

        .fading-circle .sk-circle10 {
            -webkit-transform: rotate(270deg);
            -ms-transform: rotate(270deg);
            transform: rotate(270deg);
        }

        .fading-circle .sk-circle11 {
            -webkit-transform: rotate(300deg);
            -ms-transform: rotate(300deg);
            transform: rotate(300deg);
        }

        .fading-circle .sk-circle12 {
            -webkit-transform: rotate(330deg);
            -ms-transform: rotate(330deg);
            transform: rotate(330deg);
        }

        .fading-circle .sk-circle2:before {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
        }

        .fading-circle .sk-circle3:before {
            -webkit-animation-delay: -1s;
            animation-delay: -1s;
        }

        .fading-circle .sk-circle4:before {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }

        .fading-circle .sk-circle5:before {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
        }

        .fading-circle .sk-circle6:before {
            -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s;
        }

        .fading-circle .sk-circle7:before {
            -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s;
        }

        .fading-circle .sk-circle8:before {
            -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s;
        }

        .fading-circle .sk-circle9:before {
            -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s;
        }

        .fading-circle .sk-circle10:before {
            -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s;
        }

        .fading-circle .sk-circle11:before {
            -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s;
        }

        .fading-circle .sk-circle12:before {
            -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s;
        }

        @-webkit-keyframes sk-circleFadeDelay {
            0%, 39%, 100% {
                opacity: 0;
            }
            40% {
                opacity: 1;
            }
        }

        @keyframes sk-circleFadeDelay {
            0%, 39%, 100% {
                opacity: 0;
            }
            40% {
                opacity: 1;
            }
        }

        /***********************/
        /* HALF CIRCLE SPINNER */
        /***********************/

        .half-circle {
            width: 2em;
            height: 2em;
            display: inline-block;
            border: .2em solid transparent;
            border-left-color: currentColor;
            border-top-color: currentColor;
            animation: rotate 600ms infinite linear;
            border-radius: 50%;
        }

        @keyframes rotate {
            to {
                transform: rotate(1turn)
            }
        }


        /***********************/
        /* CUBIC GRID SPINNER */
        /***********************/
        .sk-cube-grid {
            width: 2em;
            height: 2em;
        }

        .sk-cube-grid .sk-cube {
            width: 33%;
            height: 33%;
            float: left;
            -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
        }
        .sk-cube-grid .sk-cube1 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
        .sk-cube-grid .sk-cube2 {
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
        .sk-cube-grid .sk-cube3 {
            -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s; }
        .sk-cube-grid .sk-cube4 {
            -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
        .sk-cube-grid .sk-cube5 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
        .sk-cube-grid .sk-cube6 {
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
        .sk-cube-grid .sk-cube7 {
            -webkit-animation-delay: 0s;
            animation-delay: 0s; }
        .sk-cube-grid .sk-cube8 {
            -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
        .sk-cube-grid .sk-cube9 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }

        @-webkit-keyframes sk-cubeGridScaleDelay {
            0%, 70%, 100% {
                -webkit-transform: scale3D(1, 1, 1);
                transform: scale3D(1, 1, 1);
            } 35% {
                  -webkit-transform: scale3D(0, 0, 1);
                  transform: scale3D(0, 0, 1);
              }
        }

        @keyframes sk-cubeGridScaleDelay {
            0%, 70%, 100% {
                -webkit-transform: scale3D(1, 1, 1);
                transform: scale3D(1, 1, 1);
            } 35% {
                  -webkit-transform: scale3D(0, 0, 1);
                  transform: scale3D(0, 0, 1);
              }
        }


    `]
})
export class Ng2LoadingSpinnerComponent implements OnInit {

    @Input() config: Ng2LoadingSpinnerConfig;
    @Input() template: TemplateRef<any>;

    ANIMATION_TYPES = ANIMATION_TYPES;

    constructor(public vcRef: ViewContainerRef) {
    }

    ngOnInit() {
    }
}
