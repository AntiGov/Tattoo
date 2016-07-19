FlowRouter.route('/',{
	name:"home",
	action(){
		BlazeLayout.render('homeLayout')
	}
})


AdminConfig = {
	name:"Tattoo",
	adminEmails: ['admin@tatto.com']
} 