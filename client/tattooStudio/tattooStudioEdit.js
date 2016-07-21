/*Template.tattooStudioEditView.onCreated(()=>{
  this.artistId = () => FlowRouter.getParam('_id');
  this.autorun(()=>{
    this.subscribe('oneArtist',this.artistId())
  })
})
*/
Template.tattooStudioEditView.helpers({
  studio(){
      return TattooStudio.findOne({_id: FlowRouter.getParam('_id')});
  }
})

AutoForm.hooks({
  updateTattooStudio:{
    onSuccess(){
      FlowRouter.go('tattooStudioList')
    }
  }
})