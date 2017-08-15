app.controller("productsController", function($scope, $location, $http) {

    console.log($location.url())
    $http.get("http://localhost:9090/api/products")
        .then(function(data) {
            $scope.productData = data.data.data
            $scope.links = data.data.links
            console.log($scope.productData)
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
    console.log($scope.quantity)
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
            console.log($scope.cartData)
        })
        .catch(function(data) {
            alert("Error in fetching cart data");

        })
    $scope.cartList = function() {
        $location.path('/cart')
    }

})
app.controller("authController", function($scope, $location, $http) {


    $scope.signup = function() {
        var data = {
                username: $scope.username,
                password: $scope.password
            }
        console.log(data)
        $http.post("http://localhost:9090/api/signup", data)
            .then(function(data) {
                console.log("in sign up ")
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
                console.log("in signin")
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