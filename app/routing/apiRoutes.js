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
        //check each newFriend against the others
        for (var i = 0; i < newFriend.length-1; i ++) {
            compFriend = newFriend[i];
            //check data in obj.score array against others
            for (var j = 0; j < 10; j ++) {
                friendScore = compFriend.score[j];
                let diff = parseInt(friendScore - compFriend);
            }
            //friendCheck = newFriend[i];

        }
    });



    app.post("/api/clear", function() {
     
        });
    

    }
//console.log(compFriend);
//console.log(newFriend);
//console.log(diff);
//console.log(friendData);


//console.log(friend);