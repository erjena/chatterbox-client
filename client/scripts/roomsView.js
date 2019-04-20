var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

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
