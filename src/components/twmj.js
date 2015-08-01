var app = angular.module('twmj', ['twmj.controllers', 'ngMaterial', 'ui.router']);
app.config([
    '$stateProvider', '$locationProvider',
    function($stateProvider, $locationProvider) {
        $stateProvider.state(
            'home', {
                url: '/',
                controller: 'HomeCtrl as h',
                templateUrl: '/templates/home.html'
            }

        ).state(
            'player', {
                templateUrl: '/templates/player.html',
                abstract: true
            }
        ).state(
            'player.listen', {
                url: '/listen',
                templateUrl: '/templates/listen.html',
                controller: 'ListenCtrl as l'
            }
        );

        $locationProvider.html5Mode({
            enabled: true,
            rewriteLinks: false
        });

        $locationProvider.hashPrefix('!');
    }
]);

