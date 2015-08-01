'use strict';

var app = angular.module('twmj.directives', ['twmj.controllers']);

app.directive('player', ['PlayerCtrl', function (PlayerCtrl) {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            name: '@'
        },
        controller: PlayerCtrl,
        contollerAs: 'player',
        template: '<section></section>'
    };
}]);