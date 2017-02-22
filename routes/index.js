module.exports = function(app)
{

    var users = require('./users');
    var client = require('./client');
    var chat = require('./chat');

    app.post('/account', require('./account/join').post);
    app.get('/account', require('./account/login').get);
    app.use('/users', users);
    app.use('/client', client);
    app.use('/chat', chat);
    app.post('/test', require('./test').post);
    app.post('/friend/add', require('./friend/add').post);
    app.post('/friend/info', require('./friend/info').post);
    app.post('/device/info', require('./device/info').post);
    app.post('/status/login', require('./status/login').post);

}

