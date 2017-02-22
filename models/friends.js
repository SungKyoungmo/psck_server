/**
 * Created by Minwoo on 2017. 2. 10..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var friendSchema = new Schema({
    u_id: String,
    f_id: String,
});
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
try {
    const yaml = require('js-yaml');
    const fs = require('fs');
    const config = yaml.safeLoad(fs.readFileSync('../setting.yaml', 'utf8'));
    const indentedJson = JSON.stringify(config, null, 4);
    var temp = "mongodb://"+config.server.id+":"+config.server.pw+"@"+config.server.host+":"+config.server.mongodb_port+"/"+config.server.mongodb_name;
    //mongoose.connect(temp);
} catch (e) {
    console.log(temp);
}


