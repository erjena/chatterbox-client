var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var msg = $('input[name="message"]').val();
    var user = window.location.search.substr(10);
    var roomName = $('input[name="room"]').val();
    var oneMessage = { username: user, text: msg, roomname: roomName };
    Parse.create(oneMessage,
      function (data) {
        console.log('chatterbox: Message sent');
        Parse.readAll((data) => {
          // examine the response from the server request:
          window.Messages.data = data.results;
          window.location.reload();
        })
      },
      function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      });
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};