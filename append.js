appendConversations: function(conversations) {
  for (var i=0; i<conversation.length; i++){
    $('#conversations').append('<div class="conversation">' + conversation[i] + '</div>');
  }
}
