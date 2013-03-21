var jade = require('jade');
var str = require("fs").readFileSync(__dirname +"/test.jade", "utf8");




jade.render(str, { filename: "test.jade" }, function(err, jade) {
    if (err) throw err;
    var http = require('http');
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(jade);
    }).listen(8888, '127.0.0.1');
    console.log('asaasasasddads http://127.0.0.1:8888/');
});





