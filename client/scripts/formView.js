var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var msg = $("input:first").val();
    var user = window.location.search.substr(10);
    var roomName = 'Our room';
    var oneMessage = { username: user, text: msg, roomname: roomName };
    Parse.create(oneMessage,
      function (data) {
        console.log('chatterbox: Message sent');
        Parse.readAll((data) => {
          // examine the response from the server request:
          window.Messages.data = data.results;
        })
      },
      function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      });
    //location.reload();
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};