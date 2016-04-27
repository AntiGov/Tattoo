Template.form.helpers({
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