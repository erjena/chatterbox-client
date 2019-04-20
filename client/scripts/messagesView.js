var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {
    for (var i = 0; i < Messages.data.length; i++) {
      var {username, text, createdAt} = Messages.data[i];
      if(username !== undefined && text !== undefined && createdAt !== undefined) {

        var date = new Date(createdAt);
        var day = date.getDate();
        var month = date.getMonth()+1;
        var year = date.getFullYear();
        var formattedDate = `${day}/${month}/${year}`;
        text = _.escape(text);
        var compiled = MessageView.render({username, text, formattedDate});
        this.$chats.append(compiled);
      }
    }
  }

};