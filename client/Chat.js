var messages;

Tracker.autorun(function() {
    messages = Meteor.subscribe('messages');
});

Template.Chat.events({
    'submit form': function(e) {
        e.preventDefault();
        var input = $(e.currentTarget).find('[name=message]');
        var message = input.val();
        if (!message.trim()) return null;
        Meteor.call("createMessage", message);
        input.val('');
    },
    'click .login': function(e) {
        console.log('logging in');
        Meteor.loginWithTwitter();
    }
});

Template.Chat.helpers({
    messages: function() {
        return Messages.find({});
    },
    isReady: function() {
        return messages.ready();
    }
});
