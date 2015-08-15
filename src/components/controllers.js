
class HomeCtrl {
    constructor($http, $state){

        this.grams = [];
        this.sounds = [];
        this.items = [];

        this.$state = $state;
    }

    _merge(){}

}
HomeCtrl.$inject = ['$http', '$state'];

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

export { HomeCtrl };
