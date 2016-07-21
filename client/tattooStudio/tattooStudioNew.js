AutoForm.hooks({
  tattooStudioNew:{
    onSuccess(){
      FlowRouter.go('tattooStudioList')
    }
  }
})