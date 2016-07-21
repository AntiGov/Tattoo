FlowRouter.route('/',{
	name:"home",
	action(){
		BlazeLayout.render('homeLayout')
	}
})


FlowRouter.route('/user/tracking',{
  name:'tattooTracking',
  action(){
    BlazeLayout.render('homeLayout',{main:'tattooTrackingView'})
  }
})
