/**
 * Created by Minwoo on 2017. 2. 8..
 */


exports.post = function(req, res){
    console.log(req.body);
    console.log("Request handler random was called.");
    res.writeHead(200, {"Content-Type": "application/json"});
    var otherArray = ["item1", "item2"];
    var otherObject = { item1: "item1val", item2: "item2val" };
    var json = JSON.stringify({
        anObject: otherObject,
        anArray: otherArray,
        another: "item"
    });
    var friend = require('../../model/friends');
    friend.u_id = req.body.my_id

    friend.f_id = req.body.add_id
    friend.save(function(err, friend){
        if(err) return console.error(err);
        console.dir(friend);
    });
    res.end(json);




};
