AutoForm.hooks({
  insertForm: {
    onSuccess(formType, res) {
      FlowRouter.go("formSubmit", {_id: res});
    }
  }
})