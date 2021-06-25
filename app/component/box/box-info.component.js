
angular.
    module('boxInfoModule', []).
    component('boxInfo', {
        template: '<div class="info-box bg-{{$ctrl.boxBackground}}">' +
                        '<span class="info-box-icon bg-{{$ctrl.boxType}} {{$ctrl.boxElevation?\'elevation-\'+$ctrl.boxElevation:\'-\'}} "><i class="fas fa-{{$ctrl.boxIcon}}"></i></span>'+      
                        '<div class="info-box-content">' + 
                            '<span class="info-box-text">{{$ctrl.boxText}}</span>' +
                            '<span class="info-box-number">' +
                                '{{$ctrl.boxNumber}}' +
                                '<small>{{$ctrl.boxSmall}}</small>' +
                            '</span>' +
                        '</div>' +
                    '</div>',
        bindings: {
            boxText: '@',
            boxNumber: '@',
            boxSmall: '@',
            boxIcon: '@',
            boxType: '@',
            boxBackground: '@',
            boxElevation: '@'
        }
    });