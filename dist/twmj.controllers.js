'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var app = angular.module('twmj.controllers', ['ngMaterial']);

app.controller('TwmjRootCtrl', ['$scope', function ($scope) {}]);

var HomeCtrl = function HomeCtrl($scope) {
    _classCallCheck(this, HomeCtrl);

    this.birthdate = {
        day: undefined,
        month: undefined,
        year: undefined
    };
};

app.controller('HomeCtrl', ['$scope', HomeCtrl]);

var PlayerCtrl = (function () {
    function PlayerCtrl($scope, songService) {
        _classCallCheck(this, PlayerCtrl);

        this.songQueue = [];
        this.w;
    }

    _createClass(PlayerCtrl, [{
        key: 'pop',
        value: function pop() {
            return this.songQueue.shift();
        }
    }, {
        key: 'push',
        value: function push(item) {
            this.songQueue.push(item);
            return this.songQueue.length;
        }
    }, {
        key: 'flush',
        value: function flush() {}
    }]);

    return PlayerCtrl;
})();

app.controller('PlayerCtrl', ['$scope', PlayerCtrl]);

var ListenCtrl = function ListenCtrl($scope) {
    _classCallCheck(this, ListenCtrl);

    this.birthdate = {
        day: undefined,
        month: undefined,
        year: undefined
    };
};

app.controller('ListenCtrl', ['$scope', ListenCtrl]);