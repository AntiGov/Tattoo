Template.wizard.helpers({
  steps: function() {
    return [{
      id: 'contact-information',
      title: 'How many in your party',
      schema: UserFormPage1
    }, {
      id: 'payment-information',
      title: 'subscribe',
      schema: UserFormPage2
    }
    ];
  }
});

/*
onSubmit: function(data, wizard) {
        var self = this;
        Orders.insert(_.extend(wizard.mergedData(), data), function(err, id) {
          if (err) {
            self.done();
          } else {
            Router.go('viewOrder', {
              _id: id
            });
          }
        });
        */