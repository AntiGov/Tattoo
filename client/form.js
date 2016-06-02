AutoForm.hooks({
  insertForm: {
    onSuccess(formType, res) {
      AppSettings.update({_id: Meteor.user() && Meteor.user().getSettings()._id}, {$set: {showDiscoverDenton: true}})
      FlowRouter.go("formSubmit", {_id: res});
    }
  }
})