var path = require("path");

module.exports = function(app) {
    app.get('/survey', function(req, res) {
        res.sendfile(path.join(__dirname + '/../public/survey.html'));
    });
    app.get('/', function(req, res) {
        console.log(__dirname);
        res.sendfile(path.join(__dirname + '/../public/home.html'));
    });
};
console.log(__dirname);
console.log("hello");