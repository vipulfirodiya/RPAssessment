"use strict";
angular.module("RPApp", ["ui.router"]).config(["$stateProvider", "$urlRouterProvider", function(l, e) {
    e.when("", "/home"), l.state("home", {
        url: "/home",
        templateUrl: "app/views/home.html",
        controller: "HomeController"
    }).state("about", {
        url: "/about-us",
        templateUrl: "app/views/aboutus.html",
    })
}]).directive('modalDialog', function() {
    return {
        restrict: 'E',
        scope: {
            show: '='
        },
        replace: !0,
        transclude: !0,
        link: function(scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
            scope.hideModal = function() {
                scope.show = !1
            }
        },
        template: "<div class='ng-modal' ng-show='show'>" + "<div class='ng-modal-overlay' ng-click='hideModal()'>" + "</div>" + "<div class='ng-modal-dialog' ng-style='dialogStyle'>" + "<div class='ng-modal-close' ng-click='hideModal()'>X</div>" + "<div class='ng-modal-dialog-content' ng-transclude>" + "</div>" + "</div>" + "</div>"
    }
})