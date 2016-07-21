/*Template.tattooArtistsEditView.onCreated(()=>{
  this.artistId = () => FlowRouter.getParam('_id');
  this.autorun(()=>{
    this.subscribe('oneArtist',this.artistId())
  })
})
*/
Template.tattooArtistsEditView.helpers({
  artist(){
      return StudiosArtists.findOne({_id: FlowRouter.getParam('_id')});
  }
})

AutoForm.hooks({
  updateTattooArtist:{
    onSuccess(){
      FlowRouter.go('tattooArtistsList')
    }
  }
})