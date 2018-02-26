var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");


var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//require("./routing/apiRoutes")(app);
require("app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});