const twit = require("twit");
const config = require("./config.js");

const Twitter = new Twitter(config);

let retweet = function(){
    let params = {
        q: "#nodejs, #Nodejs",
        result_type: "recent",
        lang: "en"
    }

Twitter.get('search/tweets', params, function(err, data) {
    if(!err){
        let retweetId = data.statuses[0].id_str;
        
        Twitter.post('statuses/retweet/:id', {
            id: retweetId
        }, function(err, response) {
            if(response){
                console.log("Retweeted! It works!");
            }
            if(err){
                console.log('Something went wrong while retweet.');
            }
        });
    }
    else{
        console.log('something went wrong with searching');
    }
});
}

retweet();
setInterval(retweet, 3000000);