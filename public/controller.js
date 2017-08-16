app.controller("productsController", function($scope, $location, $http) {

    $http.get("http://localhost:9090/api/products")
        .then(function(data) {
            $scope.productData = data.data.data
            $scope.links = data.data.links
        })
        .catch(function(data) {
            alert("Error in fetching data");

        })

    $scope.productPage = function(id) {
        $location.path('/product/' + id)
    }



})
app.controller("productController", function($scope, $location, $http) {


    $scope.productId = $location.url().split('/')[2]
    $scope.quantities = [1, 2, 3, 4]
    $http.get("http://localhost:9090/api/product/" + $scope.productId)
        .then(function(data) {
            $scope.detailedProduct = data.data.data
        })
        .catch(function(data) {
            alert("Error in fetching product data");

        })
    $scope.addToCart = function(id) {
        $scope.data = {
            id: id,
            quantity: $scope.quantity
        }
        console.log($scope.data)
        $http.post("http://localhost:9090/api/cart", $scope.data)
            .then(function(data) {
                console.log("added to cart:")
                alert("product added to cart successfully")
            })
            .catch(function(data) {
                alert("Error in adding to cart");

            })

    }


})
app.controller("cartController", function($scope, $location, $http) {

    $scope.hideHeader = function() {
        if ($location.url() === '/' || $location.url() === '/signin')
            return true
        else
            return false;
    }

    $http.get("http://localhost:9090/api/cart")
        .then(function(data) {
            $scope.cartData = data.data.data
            console.log("in cart list:")
        })
        .catch(function(data) {
            alert("Error in fetching cart data");

        })
    $scope.cartList = function() {
        $location.path('/cart')
    }

    $scope.checkout = function() {
        $location.path('/checkout');
    }

    $scope.products = function() {
        $location.path('/products');
    }
})
app.controller("authController", function($scope, $location, $http) {


    $scope.signup = function() {
        var data = {
            username: $scope.username,
            password: $scope.password
        }
        $http.post("http://localhost:9090/api/signup", data)
            .then(function(data) {
                alert("registered successfully")
                $location.path('/signin')
            })
            .catch(function(data) {
                alert("Error in registering");

            })
    }

    $scope.signin = function() {
        var data = {
            username: $scope.username,
            password: $scope.password
        }
        $http.post("http://localhost:9090/api/signin", data)
            .then(function(data) {
                alert(data.data.message);
                $location.path('/products')
            })
            .catch(function(data) {
                alert("Error in signing in");

            })
    }
    $scope.login = function() {
        $location.path('/signin')
    }
})

app.controller("checkoutController", function($scope, $location, $http) {
    $http.post("http://localhost:9090/api/checkout")
        .then(function(data) {
            $scope.productSummary = data.data.data

        })
        .catch(function(data) {
            alert("Error in fetching data");

        })

    $scope.checkout = function() {
        alert("Proceeding to payment");
        $location.path('/payment')
    }
})

app.controller("paymentController", function($scope, $location, $http) {
    $scope.orderConfirmation = function() {
        var data = {
            cardName: $scope.cardName,
            cardNumber: $scope.cardNumber,
            cvv: $scope.cvv,
            cardExpiry: $scope.cardExpiry
        }
        $http.post("http://localhost:9090/api/placeorder")
            .then(function(data) {
                $scope.productSummary = data.data.data
                console.log($scope.productSummary)
                $location.path('/orderConfirmation')
            })
            .catch(function(data) {
                alert("Error in fetching data");

            })
    }



})