

var MessagesView = {

  $chats: $('#chats'),
  $friend: $('.username'),

  initialize: function() {
    $("body").on('click', '#specificUser', function() {
      var getFriend = document.getElementById("specificUser");
      Friends['Friend ' + getFriend.innerHTML] = getFriend.innerHTML;
      alert("Friend added!!!!");
    });
  },

  render: function() {

    for (var i = 0; i < Messages.data.length; i++) {
      var {username, text, createdAt, roomname} = Messages.data[i];
      if(username !== undefined && text !== undefined && createdAt !== undefined && roomname !== undefined) {
        if(roomname === thisRoom) {
          var date = new Date(createdAt);
          var day = date.getDate();
          var month = date.getMonth()+1;
          var year = date.getFullYear();
          var formattedDate = `${day}/${month}/${year}`;
          text = _.escape(text);
          var compiled = MessageView.render({username, text, formattedDate});
          this.$chats.append(compiled);
        } else if (thisRoom === undefined) {
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
  }

};