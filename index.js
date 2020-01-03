var io = require('socket.io')();

io.listen(8888);

io.on('connection', function (client) {
    client.on('event', (data) => {
        let name = data.name;

        console.log(data)

        io.sockets.emit(name);
    });
});
