if (Meteor.isClient) {
  Template.newTicket.events({
    // JS event handler listens for submit action in the form
    'submit .new-ticket': function(event){
      var enteredTitle = event.target.title.value;
      console.log(event)
      // Grab values from the form to store in the database
      Tickets.insert({title: enteredTitle, requester: Meteor.user().username});

      // clear form
      event.target.title.value = "";

      // Tells the web browser to not do the default form submit action since we have already handled it.
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

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}