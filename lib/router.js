FlowRouter.route('/',{
	name:"home",
	action(){
		BlazeLayout.render('homeLayout')
	}
})

FlowRouter.route('/user/add/tattoo-artist',{
  name:'tattooArtists',
  action(){
    BlazeLayout.render('homeLayout',{main:'tattooArtistsView'})
  }
})

FlowRouter.route('/user/add/tattoo-studio',{
  name:'tattooStudio',
  action(){
    BlazeLayout.render('homeLayout',{main:'tattooStudioView'})
  }
})

FlowRouter.route('/user/add/tattoo-appointment',{
  name:'tattooAppointment',
  action(){
    BlazeLayout.render('homeLayout',{main:'tattooAppointmentView'})
  }
})

FlowRouter.route('/user/list/studio-view',{
  name:'tattooStudioList',
  action(){
    BlazeLayout.render('homeLayout',{main:'tattooStudioListView'})
  }
})

FlowRouter.route('/user/new/studio-new',{
  name:'tattooStudioNew',
  action(){
    BlazeLayout.render('homeLayout',{main:'tattooStudioNewView'})
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

FlowRouter.route('/user/list/appointment-view',{
  name:'tattooAppointmentList',
  action(){
     BlazeLayout.render('homeLayout',{main:'tattooAppointmentListView'})
  }
})
FlowRouter.route('/user/new/appointment-new',{
  name:'tattooAppointmentNew',
  action(){
    BlazeLayout.render('homeLayout',{main:'tattooAppointmentNewView'})
  }
})