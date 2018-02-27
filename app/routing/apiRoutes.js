//var friend = require("../data/friend");

var friend = {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}


module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.json(friend);
    })
    
}
console.log(friend);