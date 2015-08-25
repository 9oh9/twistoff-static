import angular from 'angular';
import 'angular-ui-router';
import ngMaterial from 'angular-material';
import 'jxnblk/plangular';
import { HomeCtrl } from 'src/components/controllers'
import { InstagramComponent } from 'src/components/services'


angular.module('twmj', ['ngMaterial', 'ui.router', 'plangular'])
    .config([
        '$stateProvider',
        '$locationProvider',
        '$mdThemingProvider',
        'plangularConfigProvider',
        ($stateProvider, $locationProvider, $mdThemingProvider, plangularConfigProvider) => {

        plangularConfigProvider.clientId = 'c753c414274620951c8843d47245ae07';

        $stateProvider.state('home', {
            url: '/',
            controller: 'HomeCtrl as h',
            resolve: {
                InstagramService: 'InstagramService',
                grams: (InstagramService) => {
                    return InstagramService.getMyMedia();
                }
            },
            templateUrl: '/templates/home.html'
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
            .backgroundPalette('blue-grey');

        console.log('in config theming');
    }])
    .run(['$rootScope', 'InstagramService', ($rootScope, InstagramService) =>{

        InstagramService.setCount(10);
        InstagramService.setToken('1649788950.1677ed0.8706fda58fa94229ae114da9e3708755');

        $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
            console.log('$stateChangeStart to '+toState.url+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
            console.log("toSTATE", toState);
        });
        $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
            console.log('$stateChangeError - fired when an error occurs during transition.');
            console.log(arguments);
        });

        $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
            console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
        });

        // $rootScope.$on('$viewContentLoading',function(event, viewConfig){
        //   // runs on individual scopes, so putting it in "run" doesn't work.
        //   console.log('$viewContentLoading - view begins loading - dom not rendered',viewConfig);
        // });
        //
        $rootScope.$on('$viewContentLoaded',function(event){
            console.log('$viewContentLoaded - fired after dom rendered',event);
        });

        $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){
            console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
            console.log(unfoundState, fromState, fromParams);
        });

    }])
    .service('InstagramService', InstagramComponent)
    .controller('HomeCtrl', HomeCtrl);
