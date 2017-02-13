/**
 * Created by Minwoo on 2017. 2. 10..
 */
exports.post = function(req, res){
    console.log(req.body);
    console.log("Request handler random was called.");

    res.writeHead(200, {"Content-Type": "application/json"});

    var json = JSON.stringify(global.deviceinfo[req.body.u_id]);
    res.end(json);
};

