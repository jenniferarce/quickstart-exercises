"use strict";
var Tweet = (function () {
    function Tweet(accountName, tweetHandler, tweetText, likeCounter, isLiked, imageUrl) {
        this.accountName = accountName;
        this.tweetHandler = tweetHandler;
        this.tweetText = tweetText;
        this.likeCounter = likeCounter;
        this.isLiked = isLiked;
        this.imageUrl = imageUrl;
    }
    return Tweet;
}());
exports.Tweet = Tweet;
//# sourceMappingURL=tweet.js.map