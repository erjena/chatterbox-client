var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username">
          <p><%= username %></p>
        </div>
        <div class="text">
          <p><%= text %></p>
        </div>
        <div class="formattedDate">
          <p><%= formattedDate %></p>
        </div>
        <div></div>
      </div>
    `)
};