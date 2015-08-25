
class HomeCtrl {
    constructor($state, InstagramService, grams){
        console.log("GRAMS", grams);
        this.grams = grams.data;
        this.nextGrams = grams.pagination;
        this.sounds = [];
        this.items = [];
        this.igService = InstagramService;
        this.$state = $state;

    }

    _merge(){}

}
HomeCtrl.$inject = ['$state', 'InstagramService', 'grams'];

export { HomeCtrl };
