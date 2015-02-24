var app = angular.module('app', ['ngRoute', 'appControllers', 'ngAnimate']);

var appControllers =  angular.module('appControllers', []);

    // configure our routes

    app.config(['$routeProvider', function($routeProvider){

        $routeProvider
            .when('/home', {
                templateUrl : 'views/home.html',
                controller  : 'HomeController',
                animate: "slideLeft"
            })
            .when('/about', {
                templateUrl : 'views/about.html',
                controller  : 'AboutController',
                animate: "slideRight"
            })
            .when('/portfolio', {
                templateUrl : 'views/portfolio.html',
                controller  : 'PortfolioController',
                animate: "slideUp"
            })
            .when('/contact', {
                templateUrl : 'views/contact.html',
                controller  : 'ContactController',
                animate: "slideDown"
            })
            .otherwise({
                templateUrl: 'views/home.html' 
            });
            

    }]);    

    