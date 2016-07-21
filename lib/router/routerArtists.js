FlowRouter.route('/user/tattoo-artist',{
  name:'tattooArtists',
  action(){
    BlazeLayout.render('homeLayout',{main:'tattooArtistsView'})
  }
})

FlowRouter.route('/user/list/artist-view',{
  name:'tattooArtistsList',
  action(){
     BlazeLayout.render('homeLayout',{main:'tattooArtistsListView'})
  }
})

FlowRouter.route('/user/new/artist-new',{
  name:'tattooArtistsNew',
  action(){
     BlazeLayout.render('homeLayout',{main:'tattooArtistsNewView'})
  }
})

FlowRouter.route('/user/artist/:_id/edit',{
  name:'tattooArtistsEdit',
  action(){
    BlazeLayout.render('homeLayout',{main:'tattooArtistsEditView'})
  }
})