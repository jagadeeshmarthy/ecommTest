app.controller("productsController", function($scope, $location, $http) {


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

    $scope.addToCart = function(id) {
        var data = {
            id: id,
            quantity: 2
        }
        $http.post("http://localhost:9090/api/cart", data)
            .then(function(data) {
                console.log("added to cart:")
            })
            .catch(function(data) {
                alert("Error in adding to cart");

            })
        alert("product added to cart successfully")
    }

})
app.controller("productController", function($scope, $location, $http) {


    $scope.productId = $location.url().split('/')[2]

    $http.get("http://localhost:9090/api/product/" + $scope.productId)
        .then(function(data) {
            $scope.detailedProduct = data.data.data
            console.log("in detailed page:")
        })
        .catch(function(data) {
            alert("Error in fetching product data");

        })
    $scope.addToCart = function(id) {
        var data = {
            id: id,
            quantity: 1
        }
        $http.post("http://localhost:9090/api/cart", data)
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


    $scope.productId = $location.url().split('/')[2]

    $http.get("http://localhost:9090/api/cart")
        .then(function(data) {
            $scope.detailedProduct = data.data.data
            console.log("in detailed page:")
        })
        .catch(function(data) {
            alert("Error in fetching product data");

        })



})