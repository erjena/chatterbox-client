var thisRoom;

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var selectElem = document.getElementById('select');
    var pElem = document.getElementById('p');
    selectElem.addEventListener('change', function() {
      $('#chats').empty();
      var index = selectElem.selectedIndex;
      thisRoom = document.getElementById("select").value;
      MessagesView.render();
    })
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