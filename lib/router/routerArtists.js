FlowRouter.route('/user/add/tattoo-artist',{
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