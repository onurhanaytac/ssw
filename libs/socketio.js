
exports.socketConnect = function socketConnect (socket) {
  console.log('A user connected');

  socket.on('chat message', function (msg) {
    socket.emit('chat message', msg);
  });

}

exports.socketDisconnect = function socketDisconnect () {
  console.log('user disconnected');
}

module.exports = exports;
