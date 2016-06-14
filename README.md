# create-url-query
A simple utility for creating get parameters base on the object

## how to

~~~~
var createUrlQuery = require('create-url-query');

var param = {
    param1: '1',
    param2: '2',
    param3: 3
};
var url = "http://example.com/" + createUrlQuery(param);
~~~~
