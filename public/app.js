var app = angular.module('ecomm', ['ngRoute']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'auth.html',
            controller: 'authController'
        })
        .when('/products', {
            templateUrl: 'product-listing.html',
            controller: 'productsController'
        })
        .when('/product/:id', {
            templateUrl: 'product.html',
            controller: 'productController'
        })
        .when('/cart', {
            templateUrl: 'cart.html',
            controller: 'cartController'
        })
        .when('/signin', {
            templateUrl: 'signin.html',
            controller: 'authController'
        })
        .when('/checkout', {
            templateUrl: 'checkout.html',
            controller: 'checkoutController'
        })
        .when('/payment', {
            templateUrl: 'payment.html',
            controller: 'paymentController'
        })
        .when('/orderConfirmation', {
            templateUrl: 'orderConfirmation.html',
            controller: 'confirmationController'
        })

        .otherwise({ redirectTo: '/' })
    $locationProvider.html5Mode(true);
}]);