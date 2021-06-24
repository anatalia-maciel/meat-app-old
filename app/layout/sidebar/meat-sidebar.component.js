
function MeatSidebarController() {
       this.title = 'Oi'         
}

angular.
    module('meatSidebarModule').
    component('meatSidebar', {
        templateUrl: 'layout/sidebar/meat-sidebar.tpl.html',
        controller: MeatSidebarController
    });