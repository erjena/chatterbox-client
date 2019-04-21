var thisRoom;

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $roomButton: $('button .addRoom'),

  initialize: function() {
    var selectElem = document.getElementById('select');
    var pElem = document.getElementById('p');
    selectElem.addEventListener('change', function() {
      $('#chats').empty();
      var index = selectElem.selectedIndex;
      thisRoom = document.getElementById("select").value;
      MessagesView.render();
    })

    RoomsView.$button.on('click', function() {
      $('h1').append("<h6>Add room here</h6>")
      $('h1').append("<form class='newRoom' action='#' id='send' method='post'><input type='text' name='room' id='room'/></form>");
    });
  },

  render: function() {
    var currentRooms = [];
    for (var i = 0; i < Messages.data.length; i++) {
      var {roomname} = Messages.data[i];
      if(roomname!== undefined && !Rooms.hasOwnProperty(roomname)) {
        Rooms[roomname] = [Messages.data[i]];
      } else if (roomname !== undefined && Rooms.hasOwnProperty(roomname)) {
        Rooms[roomname].push(Messages.data[i]);
      }
      if(roomname !== undefined && !currentRooms.includes(roomname)) {
        currentRooms.push(roomname);
        roomname = _.escape(roomname);
        var compiled = RoomView.render({roomname});
        this.$select.append(compiled);
      }
    }
  }

};
