Template.formView.helpers({
  steps: function() {
    return [{
      id: 'contact-information',
      title: 'How many in your party',
      schema: UserFormPage1,
      formId: "insert-contact"
    }, {
      id: 'payment-information',
      title: 'subscribe',
      schema: UserFormPage2,
      formId: "insrt subscrib"
    }
    ];
  }
});