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
    },  {
      id: 'zip-information',
      title: 'What is your zip code',
      schema: UserFormPage3,
      formId: "insert-number"
    }, {
      id: 'brochure-information',
      title: 'Values',
      schema: UserFormPage4,
      formId: "brochure-number"
    }, {
      id: 'interests-information',
      title: 'Values',
      schema: UserFormPage4,
      formId: "interests-number"
    }, {
      id: 'comment-information',
      title: 'Comments',
      schema: UserFormPage5,
      formId: "comments"
    }, 
  ]
}});