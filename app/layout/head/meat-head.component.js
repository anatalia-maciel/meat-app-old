
function MeatHeadController() {
       this.title = 'Oi'         
}

angular.
    module('meatHeadModule').
    component('meatHead', {
        templateUrl: 'layout/head/meat-head.tpl.html',
        controller: MeatHeadController
    });