FlowRouter.route('/',{
	name:"home",
	action(){
		BlazeLayout.render('homeLayout')
	}
})


AdminConfig = {
	name:"Tattoo",
	adminEmails: ['admin@tatto.com'],
    collections:{
      StudiosArtists:{

        },
      TattooApointment:{

        },
      TattooStudio:{
 tableColumns: [
   { label: 'name', name: 'name' }
            ]       
   }

    }
}   