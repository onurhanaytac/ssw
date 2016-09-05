var sockets = [];

exports.socketConnect = function socketConnect(socket) {
  console.log('A user connected');

  sockets.push(socket);

  socket.on('chat message', function (data) {
    sockets.forEach(function (soc) {
      soc.emit('chat message', data);
    });
  });
};

exports.socketDisconnect = function socketDisconnect() {
  console.log('User disconnected');
};

module.exports = exports;
