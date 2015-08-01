
class HomeCtrl {
    constructor($http, $state){
        this.birthdate = {
            day: undefined,
            month: undefined,
            year: undefined
        };

        this.$state = $state;
    }

    play(){
        this.$state.go('player');
    }
}
HomeCtrl.$inject = ['$http', '$state'];

class PlayerCtrl {
    constructor($scope){
        this.songQueue = [];
        this.songService = null;
        this.currentSong = 'RubBzkZzpUA';

        $scope.$on('youtube.player.ready', ($event, player) => {
            player.playVideo();
        });

    }

//    pop(){
//        item = this.songQueue.shift();
//
//        if(this.songQueue.length = 1){
//            this.songService.getSongs(function(data){
//                for(var i = 0; i < data.length; i++){
//                    this.songQueue.push(data[i]);
//                }
//            });
//        }
//
//        return item;
//    }
//
//    push(item){
//        this.songQueue.push(item);
//        return this.songQueue.length;
//    }
//
//    flush(){
//        this.songQueue = [];
//        return this.songQueue;
//    }

}
PlayerCtrl.$inject = ['$scope'];

class ListenCtrl {
    constructor($scope){
        this.birthdate = {
            day: undefined,
            month: undefined,
            year: undefined
        };
    }
}

export { HomeCtrl, PlayerCtrl };
