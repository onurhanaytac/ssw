Ext.define('extApp.controller.chat.ChatController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.ChatController',

  onButtonClickSend: function (button, e, eOpts) {
    var messageBox = Ext.ComponentQuery.query('#messageBox')[0];
    var message = messageBox.getValue()
    if (message == '') {
      return;
    }
    messageBox.setValue('');

    var socket = io();
    socket.emit('chat message', message);

    socket.on('chat message', function(msg) {
      console.log(msg)
    });
  },

  init: function () {
    var me = this;
    var socket = io();

    me.control({
      'textfield': {
        specialkey: function(field, e) {
          if(e.getKey() == e.ENTER) {
            me.onButtonClickSend();
          }
        } // specialkey
      }
    });
  }
});
