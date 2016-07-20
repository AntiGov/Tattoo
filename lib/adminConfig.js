AdminConfig = {
<<<<<<< HEAD
  collections: {
   
    TattooStudio: {
    	tableColumns: [
    		{ label: 'Name', name: 'name' }
    	]
    },
    TattooApointment:{
      tableColumns:[
        {label: 'Date', name:'date'},
        {label: 'StudioId', name: 'tattooStudioId'},
        {label: 'ArtistId', name:'tattooArtistId'}
      ]
    },
   StudiosArtists:{
      tableColumns:[
        {label: 'Name', name:'name'},
        {label: 'StudioId', name: 'tattooStudioId'},
        {label: 'ArtistId', name:'tattooArtistId'},
        {label: 'Role', name:'role'}
      ]
    }
  }
};
=======
  name:"Tattoo",
  adminEmails: ['admin@tatto.com'],
    collections:{
      StudiosArtists:{},
      TattooApointment:{},
      TattooStudio:{

        tableColumns: 
        {name:"name"}
      }

    }
}   
>>>>>>> 8a7cd95d8fcef15f832b1622a061e9f9a76067f0
