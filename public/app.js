var app = angular.module('ecomm', ['ngRoute']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/products', {
            templateUrl: 'product-listing.html',
            controller: 'productsController'
        })
        .when('/product/:id', {
            templateUrl: 'product.html',
            controller: 'productController'
        })

    $locationProvider.html5Mode(true);
}]);