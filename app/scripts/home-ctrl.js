angular.module("RPApp").controller("HomeController", ["$scope", "$rootScope", function(l, rt) {
    l.products=[ {
        productId: 1, name: "Head Phone", price: 500, src: "app/images/prod-1.jpg", qty: 0
    }
    , {
        productId: 2, name: "Pot Set", price: 200, src: "app/images/prod-2.jpg", qty: 0
    }
    , {
        productId: 3, name: "Watch", price: 500, src: "app/images/prod-3.png", qty: 0
    }
    , {
        productId: 4, name: "Note Pad", price: 10000, src: "app/images/prod-4_mini.jpg", qty: 0
    }
    ] 
    l.addToCart=function(item) {
        var pushIt=!1;
        rt.cart.forEach(element=> {
            if(element.productId==item.productId) {
                element.qty++
            }
            else {
                pushIt=!0
            }
        }
        );
        if(pushIt||rt.cart.length==0) {
            item.qty++;
            rt.cart.push(item)
        }
        l.modalShown=!0;
        l.modalContent=item.name+"  added successfully";
        localStorage.setItem("cart", JSON.stringify(rt.cart))
    }
    l.modalShown=!1;
    l.toggleModal=function() {
        l.modalShown=!l.modalShown
    }
}

])