var express = require('express'),
    app = express();

var vegetables = [
    'Carrots',
    'Cucumber',
    'Peas'
];

//home directory
app.get('/', function(req, res){
    //response send to the browser
    res.send('hello world');
});

app.get('/meaning-of-life', function(req,res) {
    res.send('42');
});

// WHEN someone visits /hello/john
// THEN set req.params to an object that looks like this: {name: "john"}
//
// WHEN someone visits /hello/sue
// THEN set req.params to an object that looks like this: {name: "sue"}
app.get("/hello/:name", function (req, res) {
    res.send( "Hello, " + req.params.name );
});

// WHEN someone visits /companies/apple/products/iphone
// THEN set req.params to an object that looks like this:
//    {company: "apple", productName: "iphone"}
app.get("/companies/:company/products/:productName", function (req, res) {
    res.send( req.params.company + " makes the " + req.params.productName );
});

/**
 * ? denotes the beginning of the query parameters
    = indicates an assignment; anything to the left is the key, while the right represents the value
    & allows for the input of multiple parameters, separating each
 */


// WHEN someone visits /greeting?name=Sue
// THEN set req.query to an object that looks like {name: "Sue"}
app.get("/hi", function (req, res) {
    var name = req.query.name;
    res.send("Hello, " + name);
});


// WHEN someone visits /greeting?first=Joe&last=Jones
// THEN set req.query to an object that looks like {first: "Joe", last: "Jones"}
app.get("/greeting", function (req, res) {
    res.send("Hello, " + [req.query.first, req.query.last].join(" "));
});

app.get('/vegetables', function (req,res) {
    //combine all of the vegetables together
   res.send(vegetables.join(' , '));
});
//create a port to listen to
app.listen('3000', function(){
    console.log('Started a server on localhost: 3000 ')
});