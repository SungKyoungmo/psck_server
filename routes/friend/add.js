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


    //friend.findById(req.body.add_id, function(err, friend){
    //    if(err) return res.status(500).json({ error: 'database failure' });
    //    if(!friend) return res.status(404).json({ error: 'book not found' });
    //
    //    if(req.body.title) book.title = req.body.title;
    //    if(req.body.author) book.author = req.body.author;
    //    if(req.body.published_date) book.published_date = req.body.published_date;
    //
    //    friend.id = req.body.add_id
    //
    //    friend.save(function(err){
    //        if(err) res.status(500).json({error: 'failed to update'});
    //        //res.json({message: 'book updated'});
    //    });
    //
    //});


    res.end(json);
};
