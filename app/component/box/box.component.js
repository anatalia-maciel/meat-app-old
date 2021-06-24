
function BoxController() {
       this.title = 'Oi'         
}

angular.
    module('boxModule').
    component('box', {
        templateUrl: 'component/box/box.tpl.html',
        bindings: {
            boxText: '@',
            boxNumber: '@',
            boxSmall: '@'
        },
        controller: BoxController
    });