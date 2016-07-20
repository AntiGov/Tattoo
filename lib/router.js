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