var ser = require('ws');
var sock = new ser.Server({
    port: 5001
});

sock.on('connection', function (ws) {

    // ws.send("hello from server")
    ws.on('message', function (message) {

        message = JSON.parse(message);



        if (message.type == "name") {
            ws.personname = message.data;
            return;
        }


        console.log('hello' + message);

        // ws.send(message.toString());

        sock.clients.forEach(function (client) {

            //  client.send(message.toString());
            if (client != ws)
                client.send(JSON.stringify({
                    // name : client.personname,
                    name: ws.personname,
                    data: message.data
                }));
        })
    });

    console.log("one client added");

    ws.on('close', function () {
        console.log("one client loss")
    })
});