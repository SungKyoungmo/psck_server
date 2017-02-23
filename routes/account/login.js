/**
 * Created by Minwoo on 2017. 2. 22..
 */
exports.get = function(req, res){

    // Assuming this is from a POST request and the body of the
    // request contained the JSON of the new "todo" item to be saved
    console.log(req.query)
    try{
        var Account = require("../../models/account");

        Account.findOne({ u_id: req.query.u_id, u_pw: req.query.u_pw}, function(err, account) {
            if(err) return res.status(500).json({
                error: err
            });

            if(account != null) {

                return res.status(200).json({
                    success: true,
                });
            }
            else {
                return res.status(200).json({
                    success: false,
                    message:'틀려쪙'
                });

            }
        })
    }
    catch(e){
        console.log(e)
    }

};