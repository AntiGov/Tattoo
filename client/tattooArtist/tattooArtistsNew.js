AutoForm.hooks({
  tattooArtistsNew:{
    onSuccess(){
      FlowRouter.go('tattooArtistsList')
    }
  }
})