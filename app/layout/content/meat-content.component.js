
function MeatContentController() {
       this.title = 'Oi'         
}

angular.
    module('meatContentModule').
    component('meatContent', {
        templateUrl: 'layout/content/meat-content.tpl.html',
        controller: MeatContentController
    });