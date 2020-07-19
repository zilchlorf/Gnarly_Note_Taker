var path = require("path");
var fs = require('fs');
//will need to use fs.writefile to save note to db.json
var express = require("express");
var PORT = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var app = express();


// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================

require('../routes/apiRoutes')(app);
require('../routes/htmlRoutes')(app);

// LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});