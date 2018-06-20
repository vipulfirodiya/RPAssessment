angular.module("RPApp").controller("MainController", ["$scope", "$rootScope", function(l, rt) {
    rt.cart = [];
    var savedCart = localStorage.getItem("cart");
    if (savedCart) {
        rt.cart = JSON.parse(savedCart)
    }

    l.toggleSidebar = function() {
        var element = document.getElementById("rp-sidenav");
        if(element.style.width == "150px"){
            element.style.width = 0;
        }else{
            element.style.width = "150px";
        }
    }

}])