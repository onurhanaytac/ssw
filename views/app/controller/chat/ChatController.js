Ext.define('extApp.controller.chat.ChatController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.ChatController',

  socket: io(),

  onButtonClickSend: function (button, e, eOpts) {
    var me = this;
    var messageBox = Ext.ComponentQuery.query('#messageBox')[0];
    var message = messageBox.getValue()

		if (message == '') {
      return;
		}

    messageBox.setValue('');
    me.socket.emit('chat message', message);
  },

  init: function () {
    var me = this;
    var messageZone = Ext.ComponentQuery.query('#MessageZone')[0];

    me.socket.on('chat message', function(msg) {
      messageZone.setTitle(msg);
    });

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
