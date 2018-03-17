var friend = require("../data/friends");
var newFriend = [];
var compFriend;
var diff;
var friendCheck;

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.json(friend);
    });
    
    app.post("/api/friends", function(req, res) {
        newFriend = req.body;
        console.log(newFriend);
        console.log(friend);
        //create empty obj with name and photo keys
        //
        let diff = 0;

        //check each newFriend against the others
        for (var i = 0; i < friend.length; i ++) {
            compFriend = friend[i];
            //check data in obj.score array against others
            for (var j = 0; j < compFriend.scores.length; j ++) {
                friendScore = compFriend.scores[j];
                diff += parseInt(friendScore - newFriend.scores[j]);
                //console.log(diff);
        
            }
            console.log(diff);

            //friendCheck = newFriend[i];

        }
        var obj = {
            name: "Pete"
        }
        res.json(obj);
    });



    app.post("/api/clear", function() {
     
        });
    

    }
//console.log(compFriend);
//console.log(newFriend);
//console.log(diff);
//console.log(friendData);


//console.log(friend);