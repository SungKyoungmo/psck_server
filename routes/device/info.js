/**
 * Created by Minwoo on 2017. 2. 8..
 */

exports.post = function(req, res){
    console.log(req.body);
    console.log("Request handler random was called.");


    info = {
        'd_ip':req.body.d_ip,
        'd_mac':req.body.d_mac,
        'd_name':req.body.d_name
    }

    global.deviceinfo[req.body.u_id] = info

    res.writeHead(200, {"Content-Type": "application/json"});
    var otherArray = ["item1", "item2"];
    var otherObject = { item1: "item1val", item2: "item2val" };
    var json = JSON.stringify({
        anObject: otherObject,
        anArray: otherArray,
        another: "item"
    });
    res.end(json);
};
