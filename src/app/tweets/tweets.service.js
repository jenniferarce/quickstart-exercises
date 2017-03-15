"use strict";
var tweet_1 = require('./tweet');
var TweetService = (function () {
    function TweetService() {
    }
    TweetService.prototype.getTweets = function () {
        return [new tweet_1.Tweet("Winward", "@winwardstudios", "Looking for a... ?", 0, false, "http://lorempixel.com/100/100/people/?3"),
            new tweet_1.Tweet("AngularJS News", "@angularjs_news", "RightRelevance:...", 20, true, "http://lorempixel.com/100/100/people/?6"),
            new tweet_1.Tweet("Bootstrap", "@3dwave", "Projects...", 5, false, "http://lorempixel.com/100/100/people/?2")];
    };
    return TweetService;
}());
exports.TweetService = TweetService;
//# sourceMappingURL=tweets.service.js.map