var jade = require('jade'),
	fs = require("fs"),
	str = require("fs").readFileSync(__dirname +"/test.jade", "utf8");

jade.render(str, { filename: "test.jade" }, function(err, jade) {
    if (err) throw err;
    //写入html文件
	fs.open("index.html","w",0644,function(e,fd){
      if(e) throw e;
      fs.write(fd,jade,0,'utf8',function(e){
        if(e) throw e;
        fs.closeSync(fd);
      });
    });
	var http = require('http');
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(jade);
    }).listen(8888, '127.0.0.1');
    console.log('a http://127.0.0.1:8888/');
});