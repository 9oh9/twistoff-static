import { RestBot } from 'nineohnine/RestBot';

class InstagramComponent {
    constructor($http){

        console.log("constructor");

        this.$http = $http;
        this.token;
        this.lastGramId;
        this.count = 10;
        this.restBot =  new RestBot(
            {
                base: 'https://api.instagram.com',
                pathToAPI: '/v1'
            }
        );

    }

    setToken(token){
        console.log("setting token");
        this.token = token;
    }

    setCount(count){
        console.log("setting count");
        this.count = count;
    }

    getMyMedia(){

        let base = 'https://api.instagram.com/v1';
        let path = '/users/self/media/recent';
        let url = base + path;

//        if(this.lastGramId != undefined){
//
//            return this.restBot.get(path, {
//                access_token: this.token,
//                count: this.count,
//                MAX_ID: this.lastGramId
//            })
//            .then(
//                (res) => {
//                    console.log("INSTAGRAM RESPONSE", res);
//                }
//            );
//        }
        let params = {
            access_token: this.token,
            count: this.count,
            callback: 'JSON_CALLBACK'
        };

        return this.$http.jsonp(url, {
            params: params
        })
        .then((res) => {
            return res.data;
        });

    }

}
InstagramComponent.$inject = ['$http'];

export { InstagramComponent };
