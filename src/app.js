import angular from 'angular';
import 'angular-ui-router';
import ngMaterial from 'angular-material';
import 'brandly/angular-youtube-embed';
import { HomeCtrl, PlayerCtrl } from 'src/components/controllers'


angular.module('twmj', ['ngMaterial', 'ui.router', 'youtube-embed'])
    .config(['$stateProvider', '$locationProvider', '$mdThemingProvider', ($stateProvider, $locationProvider, $mdThemingProvider) => {

        $stateProvider.state('home', {
            url: '/',
            controller: 'HomeCtrl as h',
            templateUrl: '/templates/home.html'
        })
        .state('player', {
            url: '/player',
            controller: 'PlayerCtrl as player',
            templateUrl: '/templates/player.html'
        });


        $locationProvider.html5Mode({
            enabled: true,
            rewriteLinks: false
        });

        $locationProvider.hashPrefix('!');

        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('green')
            .warnPalette('red')
            .backgroundPalette('grey');

    }])
    .controller('HomeCtrl', HomeCtrl)
    .controller('PlayerCtrl', PlayerCtrl);
