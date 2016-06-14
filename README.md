# create-url-query
A simple utility for conditionally for creating get parameters base on the object

## how to
~~~~
var param = {
    param1: '1',
    param2: '2',
    param3: 3
};
var url = "http://example.com/" + createUrlQuery(param);
~~~~
