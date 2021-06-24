
function MeatFooterController() {
       this.title = 'Oi'         
}

angular.
    module('meatFooterModule').
    component('meatFooter', {
        templateUrl: 'layout/footer/meat-footer.tpl.html',
        controller: MeatFooterController
    });