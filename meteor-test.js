if (Meteor.isClient) {
  Template.newTicket.events({
    // JS event handler listens for submit action in the form
    'submit .new-ticket': function(event){
      var enteredTitle = event.target.title.value;

      // Grab values from the form to store in the database
      Tickets.insert({title: enteredTitle, requester: "Nic"});

      // clear form
      event.target.title.value = "";

      return false;
    }
  });

  // Connect collection to JS
  Template.ticketList.helpers({
    tickets: function() {
      // Find all tickets in 'Tickets' model
      return Tickets.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
