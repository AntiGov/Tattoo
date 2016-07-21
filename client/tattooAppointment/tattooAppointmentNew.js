AutoForm.hooks({
  tattooAppointmentNew:{
    onSuccess(){
      FlowRouter.go('tattooAppointmentList')
    }
  }
})