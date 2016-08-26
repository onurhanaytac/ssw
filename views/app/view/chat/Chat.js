Ext.define('SSW.view.chat.Chat', {
  extend: 'Ext.panel.Panel',
  xtype: 'ssw-chat',
  requires: [
    'extApp.controller.chat.ChatController'
  ],

  controller: 'ChatController',

  layout: {
    type: 'hbox',
    align: 'stretch'
  },
  items: [
    {
      xtype: 'panel',
      title: 'Online friends',
      html: 'Okan',
      width: 240
    },
    {
      xtype: 'panel',
      layout: 'fit',
      title: 'Okan',
      flex: 1,
      items: [
        {
          xtype: 'panel',
          itemId: 'MessageZone'
        }
      ],
      dockedItems: [
        {
          xtype: 'toolbar',
          dock: 'bottom',
          items: [
            {
              xtype: 'textfield',
              flex: 1,
              itemId: 'messageBox',
              emptyText: 'Write a message..'
            },
            {
              xtype: 'button',
              text: 'Send',
              width: 60,
              listeners: {
                click: 'onButtonClickSend'
              }
            }
          ]
        }
      ]
    }
  ]

});
